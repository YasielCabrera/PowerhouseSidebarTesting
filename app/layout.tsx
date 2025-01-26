import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from '@powerhousedao/design-system/scalars';
import { getSidebarTree } from "@/lib/atlas";
import AtlasSidebar from "@/components/atlas-sidebar";

import '@powerhousedao/design-system/style.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atlas Sidebar Example",
  description: "Atlas Sidebar Example created with Next.js 15",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nodes = await getSidebarTree();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider nodes={nodes}>
          <div className="flex h-svh w-full">
            <AtlasSidebar />
            <main className="flex-1 w-full h-screen overflow-auto p-5" style={{ width: "calc(100% - var(--sidebar-width))" }}>
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
