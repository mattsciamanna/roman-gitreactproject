import React from 'react';
import cn from 'classnames';
import { parseToNodeWithPath, PATH_SPLITTER } from './file-tree.utils';
import { NodeType, Node } from './file-tree.model';
import { FileTreeNode } from '../file-tree-node/file-tree-node.component';


import css from './file-tree.module.css';
import App from '../../App';

// these import the window with the running ipc main code
// get declred in the script of index.html
declare global {
    interface Window {
      require: any;
      fileAddClick: any;
      minimizeClick: any;
      expandClick: any;
    }
  }



export type FileTreeProps = {
    data: Node[];
    handleMin: Function;
};

type FileTreeState = {
    nodes: Node[];
    selectedPath: string;
};

export class FileTree extends React.PureComponent<
    FileTreeProps,
    FileTreeState
> {
    readonly state: FileTreeState = {
        nodes: this.props.data,
        selectedPath: PATH_SPLITTER,
    };

    handleCreate = (nodeType: NodeType) => () => {
            // remember to declare these up top there
            window.fileAddClick(nodeType);
            console.log(nodeType)
    };

    handleNodeSelect = (path: string) => {
        console.log(path);
        this.setState({ selectedPath: path });
    };

    handleMinimize = (uselessslug: string) =>() => {
        window.minimizeClick(uselessslug);
        // Need to add an expand button
        console.log(App);
        // this.setState()
        // need to set react window state as fullwidth
        this.props.handleMin('fullwidth');

    };

    render() {
        const { nodes } = this.state;

        const createFileClassName = cn(css.icon, css.createFile);
        const createFolderClassName = cn(css.icon, css.createFolder);
        // added by me
        const createMinimizeClassName = cn(css.icon, css.minimizeFileTree);

        const nodesWithPath = nodes.map(node =>
            parseToNodeWithPath(node, PATH_SPLITTER)
        );

        return (
            <div className={css.container}>
                <div className={css.header}>
                    {/* <div
                        className={css.icon}
                        onClick={() => this.handleNodeSelect(PATH_SPLITTER)}
                    /> */}
                    <div className={css.text}>Files</div>
                    <div className={css.createIconsContainer}>
                        <div
                            className={createFileClassName}
                            onClick={this.handleCreate(NodeType.File)}
                        />
                        <div
                            className={createFolderClassName}
                            onClick={this.handleCreate(NodeType.Folder)}
                        />
                        <div
                            className={createMinimizeClassName}
                            // cant be anonymous for some reason seeminglhy based around typescript
                            onClick={this.handleMinimize('i am a useless slug to workaround TS')} //on click, send a signal to IPCRenderer.main 
                        
                        />
                    </div>
                </div>
                <div className={css.content}>
                    {nodesWithPath.map(node => (
                        <FileTreeNode
                            key={node.path}
                            data={node}
                            onNodeSelect={this.handleNodeSelect}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
