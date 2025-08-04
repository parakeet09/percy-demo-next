import Link from "next/link";

export default function Page1() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-bounce">
          ✨ Percy Test - Final Version! ✨
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
          <div className="w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-600 rounded-xl shadow-lg hover:shadow-xl transform hover:rotate-3 transition-all duration-300 flex items-center justify-center border-2 border-white">
            <span className="text-white font-bold text-sm">� Rose</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl shadow-lg hover:shadow-xl transform hover:rotate-3 transition-all duration-300 flex items-center justify-center border-2 border-white">
            <span className="text-white font-bold text-sm">🔥 Blaze</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl shadow-lg hover:shadow-xl transform hover:rotate-3 transition-all duration-300 flex items-center justify-center border-2 border-white">
            <span className="text-white font-bold text-sm">� Forest</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-violet-400 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transform hover:rotate-3 transition-all duration-300 flex items-center justify-center border-2 border-white">
            <span className="text-white font-bold text-sm">� Mystic</span>
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transform hover:rotate-3 transition-all duration-300 flex items-center justify-center border-2 border-white">
            <span className="text-white font-bold text-sm">🌌 Cosmic</span>
          </div>
        </div>
      </div>
    </main>
  );
}
