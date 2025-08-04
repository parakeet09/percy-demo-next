import Link from "next/link";

export default function Page1() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Page 1
        </h1>

        <nav className="flex justify-center mb-8">
          <Link
            href="/page2"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Page 2
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="w-32 h-32 bg-blue-100 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-blue-800 font-semibold">Blue 1</span>
          </div>
          <div className="w-32 h-32 bg-blue-200 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-blue-800 font-semibold">Blue 2</span>
          </div>
          <div className="w-32 h-32 bg-blue-300 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-blue-800 font-semibold">Blue 3</span>
          </div>
          <div className="w-32 h-32 bg-blue-400 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-blue-800 font-semibold">Blue 4</span>
          </div>
          <div className="w-32 h-32 bg-blue-500 rounded-lg shadow-md flex items-center justify-center">
            <span className="text-white font-semibold">Blue 5</span>
          </div>
        </div>
      </div>
    </main>
  );
}
