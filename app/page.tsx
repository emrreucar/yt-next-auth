import getCurrentUser from "./actions/getCurrentUser";
import Dashboard from "./components/Dashboard";
import Link from "next/link";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {currentUser ? (
        <Dashboard currentUser={currentUser} />
      ) : (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
          {/* Advanced Background Animation */}
          <div className="absolute inset-0">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>

          <div className="relative z-10 text-center space-y-12 max-w-4xl mx-auto px-6">
            {/* Hero Section */}
            <div className="space-y-8">
              {/* Main Title with advanced typography */}
              <div className="relative">
                <h1 className="text-7xl md:text-8xl font-black tracking-tight">
                  <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
                    HOŞ GELDİNİZ
                  </span>
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl rounded-full animate-pulse-slow"></div>
              </div>

              {/* Subtitle */}
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide leading-relaxed">
                  Geleceğin dijital deneyiminde
                </p>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Modern teknoloji ile buluşan benzersiz platform deneyimini
                  keşfedin. Sizi bekleyen sınırsız olanakları keşfetmeye hazır
                  mısınız?
                </p>
              </div>

              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center gap-6 pt-8">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm">Güvenli Giriş</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
                  <span className="text-gray-300 text-sm">Hızlı Erişim</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
                  <span className="text-gray-300 text-sm">Modern Arayüz</span>
                </div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link
                href="/login"
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>
                <div className="relative px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-500 border border-white/20">
                  <span className="relative z-10 text-lg tracking-wide">
                    GİRİŞ YAP
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </Link>

              <Link
                href="/register"
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow animation-delay-1000"></div>
                <div className="relative px-12 py-5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-500 border border-white/20">
                  <span className="relative z-10 text-lg tracking-wide">
                    KAYIT OL
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </Link>
            </div>

            {/* Social proof or additional info */}
            <div className="pt-12">
              <div className="flex items-center justify-center gap-8 text-gray-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">1K+</div>
                  <div className="text-sm">Aktif Kullanıcı</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm">Destek</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <div className="text-gray-400 text-sm">Keşfetmeye başlayın</div>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
