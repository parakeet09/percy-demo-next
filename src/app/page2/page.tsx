import Link from "next/link";

export default function Page2() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        � Page 2 - Simple Baseline
      </h1>        <nav className="flex justify-center mb-8">
          <Link
            href="/"
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Go to Page 1
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="w-32 h-32 bg-red-200 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-red-800 font-semibold">Red 1</span>
          </div>
          <div className="w-32 h-32 bg-red-300 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-red-800 font-semibold">Red 2</span>
          </div>
          <div className="w-32 h-32 bg-red-400 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-red-800 font-semibold">Red 3</span>
          </div>
          <div className="w-32 h-32 bg-red-500 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-white font-semibold">Red 4</span>
          </div>
          <div className="w-32 h-32 bg-red-600 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-white font-semibold">Red 5</span>
          </div>
        </div>
      </div>
    </main>
  );
}
