import Link from "next/link";

export default function Page2() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
        🚀 Percy Test - Page 2 Final! 🚀
      </h1>        <nav className="flex justify-center mb-8">
          <Link
            href="/"
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Go to Page 1
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm">❤️ Crimson</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm">🧡 Sunset</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm">🌟 Amber</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm">🌹 Rose</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-orange-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-bold text-sm">🔥 Blaze</span>
          </div>
        </div>
      </div>
    </main>
  );
}
