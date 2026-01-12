// components/layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <h1 className="text-xl font-bold">Article Writer</h1>
          {/* Future navigation could go here */}
        </div>
      </header>
      <main className="flex-1 container py-6">
        {children}
      </main>
      {/* Optional footer can go here */}
    </div>
  );
}