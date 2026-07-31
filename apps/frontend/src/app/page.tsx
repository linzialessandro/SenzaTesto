import { Suspense } from 'react';
import { HomeClient } from '@/components/home/HomeClient';

function HomeFallback() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 text-center text-slate-500 dark:text-slate-400">
      Caricamento di SenzaTesto…
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<HomeFallback />}>
      <HomeClient />
    </Suspense>
  );
}
