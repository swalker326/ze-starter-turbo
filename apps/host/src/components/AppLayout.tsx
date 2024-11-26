import { Header } from './Header';
import { Outlet } from 'react-router';

export default function Layout({
  showBoundary = false,
}: { showBoundary?: boolean }) {
  return (
    <div
      className={`flex flex-col h-full ${showBoundary ? 'border border-white' : ''}`}
    >
      <div>
        {showBoundary && (
          <span className="text-white font-bold top-1 left-1 z-10 bg-gradient-to-r from-gray-500 to-black p-1 rounded-lg mt-2 ml-2">
            Host Application
          </span>
        )}
        <Header />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer className="bg-black text-white p-4 min-h-24 border-t border-gray-100">
        <h1 className="text-xl">Footer</h1>
      </footer>
    </div>
  );
}
