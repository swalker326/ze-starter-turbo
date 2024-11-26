import React from 'react';
import ReactDOM from 'react-dom/client';
import RemoteEntry from './RemoteEntry.tsx';
import './bootstrap.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="bg-black text-white items-center flex flex-col justify-center h-screen w-screen">
      {' '}
      <RemoteEntry />
    </div>
  </React.StrictMode>,
);
