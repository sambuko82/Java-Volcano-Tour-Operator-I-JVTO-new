// app/not-found.tsx
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="max-w-md w-full text-center">
          <h1 className="text-9xl font-display font-bold text-stone-200 mb-4">404</h1>
          <h2 className="text-3xl font-display font-bold text-stone-900 mb-4">Route Not Found</h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved to a new proof layer.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-brand-olive text-white px-8 py-3 rounded-full font-bold hover:bg-brand-olive/90 transition-all"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
