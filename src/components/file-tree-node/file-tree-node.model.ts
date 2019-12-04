import { NodeType } from '../file-tree/file-tree.model';

export type FileWithPath = {
    type: NodeType.File;
    title: string;
    path: string;
    children?: undefined;
};

export type FolderWithPath = {
    type: NodeType.Folder;
    title: string;
    path: string;
    children?: NodeWithPath[];
};

export type CardWithPath = {
    type: NodeType.Card;
    title: string;
    path: string;
    children?: undefined;
};

export type NodeWithPath = FileWithPath | FolderWithPath | CardWithPath;
