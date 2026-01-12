// app/page.tsx
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to Article Writer Demo</h1>
        <p className="text-lg">This is the development page for testing components.</p>
      </main>
    </Layout>
  );
}