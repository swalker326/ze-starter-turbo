import { Cloud, Book, Link2Icon } from 'lucide-react';
import { Link } from 'react-router';

function RemoteEntry() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <div className="flex items-center justify-center mb-6">
          <Cloud className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Zephyr Cloud Starter
        </h1>
        <p className="text-gray-600 mb-8">
          Edge-ready template with module federation and RSPack bundling. Start
          building your application with instant deployments.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://app.zephyr-cloud.io"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://docs.zephyr-cloud.io/"
            className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            <Book className="w-4 h-4 mr-2" />
            Documentation
          </a>
          <Link
            to="/settings"
            className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            <Link2Icon />
            Router Link To Settings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RemoteEntry;
