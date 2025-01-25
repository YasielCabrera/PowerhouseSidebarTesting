"use client";

import { Sidebar } from "@powerhousedao/design-system/scalars";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function AtlasSidebar() {
    const router = useRouter();
    const { id } = useParams();
    const activeNodeId = Array.isArray(id) ? id[0] : id;
    return (
        <Sidebar 
            activeNodeId={activeNodeId || "4281ab93-ef4f-4974-988d-7dad149a693d"}
            sidebarTitle='Atlas' 
            sidebarIcon={<Image src="/atlas.png" alt="Atlas" width={32} height={32} />}
            enableMacros={4}
            onActiveNodeChange={(nodeId) => {
              router.push(`/${nodeId}`);
            }}
          />
    )
}