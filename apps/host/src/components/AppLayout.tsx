import { Header } from './Header';
import { NavLink, Outlet } from 'react-router';

export default function HomeRoute() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-grow border">
        <Outlet />
      </div>
      <footer className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">Footer</h1>
      </footer>
    </div>
  );
}
