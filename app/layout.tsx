import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider } from '@powerhousedao/design-system/scalars';
import { getSidebarTree } from "@/lib/atlas";
import AtlasSidebar from "@/components/atlas-sidebar";

import '@powerhousedao/design-system/style.css'
import { ThemeSwitcher } from "@/components/theme-switcher";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-slate-900`}
      >
        <SidebarProvider nodes={nodes}>
          <div className="flex h-svh w-full">
            <AtlasSidebar />
            <main className="flex-1 w-full h-screen overflow-auto p-4" style={{ width: "calc(100% - var(--sidebar-width))" }}>
              <ThemeSwitcher />
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
