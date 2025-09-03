"use client";

import { useState, useEffect } from "react";
import {
  HiUser,
  HiMail,
  HiCalendar,
  HiClock,
  HiLogout,
  HiChartBar,
  HiBell,
  HiCog,
  HiHeart,
  HiStar,
} from "react-icons/hi";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export interface SafeUser {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
}

interface DashboardProps {
  currentUser: SafeUser | null;
}

const Dashboard = ({ currentUser }: DashboardProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Başarıyla çıkış yapıldı! 👋");
    } catch (error) {
      toast.error("Çıkış yaparken bir hata oluştu!");
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("tr-TR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Günaydın";
    if (hour < 18) return "İyi öğlenler";
    return "İyi akşamlar";
  };

  const getProviderIcon = (provider?: string) => {
    switch (provider) {
      case "google":
        return <FaGoogle className="text-red-500" />;
      case "github":
        return <FaGithub className="text-gray-700" />;
      default:
        return <HiMail className="text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <HiUser className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400">Hoş geldiniz, kontrol paneliniz</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all duration-300 backdrop-blur-sm border border-red-500/20 cursor-pointer"
        >
          <HiLogout />
          Çıkış Yap
        </button>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {currentUser?.image ? (
              <Image
                src={currentUser?.image}
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full border-4 border-purple-500/50"
              />
            ) : (
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <HiUser className="text-white text-3xl" />
              </div>
            )}

            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {getGreeting()}, {currentUser?.name || "Kullanıcı"}! 👋
              </h2>
              <p className="text-gray-300 text-lg">
                Bugün harika bir gün, ne yapmak istiyorsunuz?
              </p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl font-bold text-white mb-1">
              {formatTime(currentTime)}
            </div>
            <div className="text-gray-300">{formatDate(currentTime)}</div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <HiChartBar className="text-blue-400 text-xl" />
            </div>
            <div>
              <p className="text-gray-400">Toplam Oturum</p>
              <p className="text-2xl font-bold text-white">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/20 rounded-xl">
              <HiClock className="text-green-400 text-xl" />
            </div>
            <div>
              <p className="text-gray-400">Aktif Süre</p>
              <p className="text-2xl font-bold text-white">
                {Math.floor(
                  (Date.now() - new Date().setHours(0, 0, 0, 0)) / 1000 / 60
                )}{" "}
                dk
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <HiBell className="text-purple-400 text-xl" />
            </div>
            <div>
              <p className="text-gray-400">Bildirimler</p>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-pink-500/20 rounded-xl">
              <HiStar className="text-pink-400 text-xl" />
            </div>
            <div>
              <p className="text-gray-400">Puan</p>
              <p className="text-2xl font-bold text-white">100</p>
            </div>
          </div>
        </div>
      </div>

      {/* User Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <HiUser className="text-purple-400" />
            Profil Bilgileri
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <HiUser className="text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm">İsim</p>
                <p className="text-white font-semibold">
                  {currentUser?.name || "Belirtilmemiş"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <HiMail className="text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm">E-posta</p>
                <p className="text-white font-semibold">
                  {currentUser?.email || "Belirtilmemiş"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                {getProviderIcon(currentUser?.provider)}
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm">Giriş Yöntemi</p>
                <p className="text-white font-semibold capitalize">
                  {currentUser?.provider || "Email"}
                </p>
              </div>
            </div>

            {currentUser?.createdAt && (
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <HiCalendar className="text-orange-400" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm">Kayıt Tarihi</p>
                  <p className="text-white font-semibold">
                    {new Date(currentUser.createdAt).toLocaleDateString(
                      "tr-TR"
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <HiCog className="text-pink-400" />
            Hızlı İşlemler
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 border border-white/10 group">
              <HiUser className="text-blue-400 text-2xl mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-white font-medium">Profili Düzenle</p>
            </button>

            <button className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300 border border-white/10 group">
              <HiCog className="text-green-400 text-2xl mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-white font-medium">Ayarlar</p>
            </button>

            <button className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 border border-white/10 group">
              <HiBell className="text-purple-400 text-2xl mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-white font-medium">Bildirimler</p>
            </button>

            <button className="p-4 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-xl hover:from-pink-500/30 hover:to-red-500/30 transition-all duration-300 border border-white/10 group">
              <HiHeart className="text-pink-400 text-2xl mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-white font-medium">Favoriler</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
