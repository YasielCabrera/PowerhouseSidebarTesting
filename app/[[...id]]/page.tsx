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
        <h1>{node.title.title} <span className="text-sm text-gray-500">{node.type}</span></h1>

        <pre>{JSON.stringify(node.content, null, 2)}</pre>
    </div>
  );
}
