import React from 'react';
import cn from 'classnames';
import { NodeWithPath } from './file-tree-node.model';
import { NodeType } from '../file-tree/file-tree.model';

import css from './file-tree-node.module.css';

const CHILDREN_PADDING = 20;

//  get the dude to let it render other stuff 
export type FileTreeNodeProps = {
    data: NodeWithPath;
    outPadding?: number;
    onNodeSelect(path: string): void;
};

type FileTreeNodeState = {
    isOpened: boolean;
};

// define the type of items (nodes ) which will populate the react sidebar
export class FileTreeNode extends React.PureComponent<
    FileTreeNodeProps,
    FileTreeNodeState
> {
    readonly state: FileTreeNodeState = {
        isOpened: false,
    };

    handleItemClick = (node: NodeWithPath) => () => {
        const { onNodeSelect } = this.props;
        this.setState(
            state => ({ isOpened: !state.isOpened }),
            () => {
                onNodeSelect(node.path);
            }
        );
    };

    render() {
        const { data, outPadding, onNodeSelect } = this.props;
        const { isOpened } = this.state;
        const isFile = data.type === NodeType.File;
        const leftPadding = outPadding || 10;
        
        // give class names to stuff 
        const iconClassName = cn(css.icon, {
            [css.icon__opened]: isOpened && !isFile,
        });

        const titleClassName = cn(css.title, {
            [css.title__file]: isFile,
        });

        return (
            <div className={css.container}>
                <div
                    className={css.item}
                    style={{ paddingLeft: leftPadding }}
                    onClick={this.handleItemClick(data)}
                >
                    {!isFile && <div className={iconClassName} />}
                    <div className={titleClassName}>{data.title}</div>
                </div>
                {data.children && isOpened && (
                    <div className={css.children}>
                        {data.children.map((node, i) => (
                            <FileTreeNode
                                key={node.path}
                                data={node}
                                outPadding={leftPadding + CHILDREN_PADDING}
                                onNodeSelect={onNodeSelect}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}
