import { NodeType, Node } from './file-tree.model';

export const data: Node[] = [
    {
        type: NodeType.Folder,
        title: 'closed_folder',
        children: [],
    },
    {
        type: NodeType.Folder,
        title: 'folder1',
        children: [
            {
                type: NodeType.Folder,
                title: 'sub_folder',
                children: [
                    {
                        type: NodeType.File,
                        title:
                            'activeFileshdgfjashgdfjhasgdjfhagsdjhfgasjdhfgjsahdgfjhs.txt',
                    },
                    {
                        type: NodeType.Folder,
                        title: 'closed_folder',
                        children: [],
                    },
                    {
                        type: NodeType.Folder,
                        title: 'folder1',
                        children: [
                            {
                                type: NodeType.Folder,
                                title: 'sub_folder',
                                children: [
                                    {
                                        type: NodeType.File,
                                        title:
                                            'activeFileshdgfjashgdfjhasgdjfhagsdjhfgasjdhfgjsahdgfjhs.txt',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: NodeType.Folder,
                        title: 'folder2',
                        children: [
                            {
                                type: NodeType.File,
                                title: 'addwindow.html',
                            },
                        ],
                    },
                    {
                        type: NodeType.Folder,
                        title: 'folder3',
                        children: [
                            {
                                type: NodeType.File,
                                title: 'addwindow.html',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: NodeType.Folder,
        title: 'folder2',
        children: [
            {
                type: NodeType.File,
                title: 'addwindow.html',
            },
        ],
    },
    {
        type: NodeType.Folder,
        title: 'folder3',
        children: [
            {
                type: NodeType.File,
                title: 'addwindow.html',
            },
        ],
    },
    {
        type: NodeType.Card,
        title: 'You have no files',
    },
];
