'use client';

import {SidebarProvider} from '@powerhousedao/design-system/scalars';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProviderWrapper({children, nodes}: {children: React.ReactNode, nodes: any}) {
  return <SidebarProvider nodes={nodes}>{children}</SidebarProvider>;
}
