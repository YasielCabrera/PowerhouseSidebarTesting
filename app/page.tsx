import { generateSidebarTree, getAtlasData } from '@/lib/atlas';
import ProviderWrapper from './provider-wrapper';
import SidebarWrapper from './sidebar-wrapper';

export default async function Home() {
  const atlasData = await getAtlasData();
  const nodes = generateSidebarTree(atlasData);

  return (
    <div className="">
      <ProviderWrapper nodes={nodes}>
        <SidebarWrapper />
      </ProviderWrapper>
    </div>
  );
}
