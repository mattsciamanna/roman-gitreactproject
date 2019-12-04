export enum NodeType {
    Folder,
    File,
    Card,
}
// types of objects which can be added
export type Node = File | Folder | Card;

export type File = {
    type: NodeType.File;
    title: string;
    children?: undefined;
};

export type Folder = {
    type: NodeType.Folder;
    title: string;
    children: Node[];
};

// added by me to hold the user not logged in mesage. 
export type Card = {
    type: NodeType.Card;
    title: string;
    children?: undefined;
};