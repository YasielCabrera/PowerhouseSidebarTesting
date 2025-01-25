interface Title {
    formalId: {
        prefix: string;
        numberPath: number[];
    };
    title: string;
}

interface InputNode {
    id: string;
    title: Title;
    ancestorSlugSuffixes: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any;
}

interface TreeNode {
    id: string;
    title: string;
    childrens: TreeNode[];
}

export async function getAtlasData(): Promise<Record<string, InputNode>> {
  const atlasResponse = await fetch('https://sky-atlas.powerhouse.io/api/view-node-tree')
  const atlasData = await atlasResponse.json()
  return atlasData
}

export async function getSidebarTree(): Promise<TreeNode[]> {
    const input = await getAtlasData();
    const nodesById: Record<string, TreeNode> = {};
    const tree: TreeNode[] = [];

    // Create all nodes
    for (const [key, value] of Object.entries(input)) {
        const { id, title } = value;
        const titleString = `${title.formalId.prefix}.${title.formalId.numberPath.join('.')} - ${title.title}`;
        nodesById[key] = { id, title: titleString, childrens: [] };
    }

    // Build the tree
    for (const [key, value] of Object.entries(input)) {
        const currentNode = nodesById[key];
        const ancestors = value.ancestorSlugSuffixes;

        if (ancestors.length === 0) {
            // If no ancestors, it's a top-level node
            tree.push(currentNode);
        } else {
            // Attach to the last ancestor in the path
            const parentKey = ancestors[ancestors.length - 1];
            if (nodesById[parentKey]) {
                nodesById[parentKey].childrens.push(currentNode);
            }
        }
    }

    return tree;
}

export async function getAtlasNode(paramId: string) {
    const id = paramId || "4281ab93-ef4f-4974-988d-7dad149a693d";
    const atlasResponse = await getAtlasData();
    for (const [, value] of Object.entries(atlasResponse)) {
        if (value.id === id) {
            return value;
        }
    }

    return null;
}