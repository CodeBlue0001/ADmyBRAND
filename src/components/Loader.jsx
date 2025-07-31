import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-500 border-t-transparent"></div>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">Loading, please wait...</p>
      </div>
    </div>
  );
}
