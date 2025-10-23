'use client';

import React from 'react';
import Link from 'next/link';
import { X, AlertCircle } from 'lucide-react';

interface CodeforcesApiBannerProps {
  onClose?: () => void;
}

const CodeforcesApiBanner: React.FC<CodeforcesApiBannerProps> = ({ onClose }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 dark:from-blue-900/20 dark:to-indigo-900/20 dark:border-blue-400">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-blue-500 dark:bg-blue-600">
              <AlertCircle className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-gray-800 dark:text-gray-200">
              <span className="md:hidden">Add your Codeforces API key!</span>
              <span className="hidden md:inline">
                Add your Codeforces API key to get faster and more reliable submission verification.
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <Link
              href="/user/profile"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              Add API Key
            </Link>
          </div>
          {onClose && (
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                onClick={onClose}
                className="-mr-1 flex p-2 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800/30 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 transition-colors"
              >
                <span className="sr-only">Dismiss</span>
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeforcesApiBanner;
