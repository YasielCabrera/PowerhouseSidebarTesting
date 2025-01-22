'use client';

import {Sidebar} from '@powerhousedao/design-system/scalars';
import Image from 'next/image';

export default function SidebarWrapper() {
  return (
    <Sidebar 
        value="test" // TODO: update once implemented
        sidebarTitle='Atlas' 
        sidebarIcon={<Image src="/atlas.png" alt="Atlas" width={32} height={32} />}
        enableMacros={4}
    />
  );
}
