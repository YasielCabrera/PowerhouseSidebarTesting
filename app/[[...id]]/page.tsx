import { getAtlasNode } from "@/lib/atlas";

export default async function Home({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const activeNodeId = Array.isArray(id) ? id[0] : id;
  const node = await getAtlasNode(activeNodeId);

  if (!node) {
    return <div>Node not found</div>
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-gray-900 dark:text-gray-50">
        {node.title.title}{' '}
        <span className="text-sm text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">{node.type}</span>
      </h1>

      <pre className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 font-mono text-sm overflow-auto">
        {JSON.stringify(node.content, null, 2)}
      </pre>
    </div>
  );
}
