import { Cloud, Github, Menu, X } from 'lucide-react';
import React from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="ml-2 text-xl font-semibold text-gray-900">
              Zephyr Cloud + Turbo Repo + Rspack
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="https://docs.zephyr-cloud.io/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Documentation
            </a>
            <a
              href="https://github.com/ZephyrCloudIO/zephyr-examples"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="h-5 w-5 mr-1" />
              <span>GitHub</span>
            </a>
            <a
              href="https://app.zephyr-cloud.io"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-100">
            <a
              href="https://docs.zephyr-cloud.io/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Documentation
            </a>
            <a
              href="https://github.com/ZephyrCloudIO/zephyr-examples"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="h-5 w-5 mr-1" />
              <span>GitHub</span>
            </a>
            <a
              href="https://app.zephyr-cloud.io"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
