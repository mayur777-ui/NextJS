"use client";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800 text-white">
      <div className="w-1/3 p-6 bg-slate-900 rounded-lg shadow-lg text-center">
        <h1 className="text-red-500 text-2xl font-bold">Oops! Something went wrong</h1>
        <p className="text-gray-300 mt-2">{error.message}</p>

        <button
          onClick={() => reset()} // This will retry rendering the page
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
