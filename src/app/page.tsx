import Link from "next/link";

export default function Page1() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          🎨 Page 1 - Colorful Test!
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
          <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl shadow-lg hover:shadow-xl transform hover:rotate-3 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm">🌸 Pink</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg hover:shadow-xl transform hover:rotate-3 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm">🔥 Fire</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl shadow-lg hover:shadow-xl transform hover:rotate-3 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm">🌊 Ocean</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow-lg hover:shadow-xl transform hover:rotate-3 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm">💜 Magic</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transform hover:rotate-3 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm">🌌 Galaxy</span>
          </div>
        </div>
      </div>
    </main>
  );
}
