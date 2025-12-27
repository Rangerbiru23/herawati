'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronRight, Target, TrendingUp, Users, Lightbulb, Camera, Palette } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Background Image Hero Section */}
      <div className="relative min-h-screen">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://ik.imagekit.io/xcl991/BG-Creative-1")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-6 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">HERAWATI</h1>
                <p className="text-xs text-orange-300">Food & Meta Ads Creative</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-orange-300 transition-colors">Beranda</a>
              <a href="#about" className="text-white hover:text-orange-300 transition-colors">Tentang</a>
              <a href="#services" className="text-white hover:text-orange-300 transition-colors">Layanan</a>
              <a href="#contact" className="text-white hover:text-orange-300 transition-colors">Kontak</a>
              <a href="/privacy" className="text-white hover:text-orange-300 transition-colors">Privacy</a>
              <a href="/terms" className="text-white hover:text-orange-300 transition-colors">Terms</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#home" className="block text-white hover:text-orange-300 transition-colors py-2">Beranda</a>
              <a href="#about" className="block text-white hover:text-orange-300 transition-colors py-2">Tentang</a>
              <a href="#services" className="block text-white hover:text-orange-300 transition-colors py-2">Layanan</a>
              <a href="#contact" className="block text-white hover:text-orange-300 transition-colors py-2">Kontak</a>
              <a href="/privacy" className="block text-white hover:text-orange-300 transition-colors py-2">Privacy</a>
              <a href="/terms" className="block text-white hover:text-orange-300 transition-colors py-2">Terms</a>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-4xl">
            <div className="mb-8">
              <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-6">
                <Target className="w-5 h-5 text-orange-300 mr-2" />
                <span className="text-orange-300 text-sm font-medium">Meta Ads Specialist for Food Industry</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              HERAWATI
              <span className="block text-3xl md:text-5xl text-orange-400 mt-2">Creative Food & Ads Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transformasi digital industri makanan Anda dengan Meta Ads yang kreatif dan efektif. 
              Kami menghadirkan solusi periklanan inovatif untuk bisnis kuliner Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Mulai Sekarang
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-orange-600">HERAWATI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneer dalam industri makanan dan solusi Meta Ads kreatif di Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-3xl">H</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Makanan & Masakan Olahan</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  HERAWATI adalah pemimpin dalam industri makanan dan masakan olahan, 
                  menggabungkan tradisi kuliner dengan inovasi modern untuk menghadirkan 
                  pengalaman gastronomi yang luar biasa.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                    <span>JL. ROGONOTO 217, Losari, Singosari, Malang</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-5 h-5 text-orange-500 mr-3" />
                    <span>085285703497</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Meta Ads Excellence</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Kami tidak hanya ahli dalam makanan, tetapi juga master dalam Meta Ads. 
                  Tim kreatif kami menggabungkan pemahaman mendalam tentang industri kuliner 
                  dengan strategi periklanan digital yang cutting-edge.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Campaigns Sukses</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">10M+</div>
                    <div className="text-sm text-gray-600">Impressions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-orange-600">Unggulan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap Meta Ads untuk industri makanan dan minuman
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meta Ads Strategy</h3>
              <p className="text-gray-700 leading-relaxed">
                Strategi periklanan Meta yang disesuaikan untuk industri makanan, 
                meningkatkan brand awareness dan conversions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Food Photography</h3>
              <p className="text-gray-700 leading-relaxed">
                Fotografi makanan profesional yang menggugah selera untuk meningkatkan 
                engagement pada iklan Meta Anda.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Audience Targeting</h3>
              <p className="text-gray-700 leading-relaxed">
                Target audiens yang presisi untuk mencapai pelanggan potensial 
                di industri kuliner dan makanan.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Content</h3>
              <p className="text-gray-700 leading-relaxed">
                Konten kreatif dan menarik khusus untuk industri makanan yang 
                meningkatkan interaksi dan penjualan.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-700 leading-relaxed">
                Analisis mendalam dan optimasi kampanye untuk hasil maksimal 
                dalam setiap investasi iklan.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Pengembangan brand kuliner yang kuat dan konsisten di platform Meta 
                untuk meningkatkan loyalitas pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hubungi <span className="text-orange-400">HERAWATI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Siap untuk transformasi digital bisnis makanan Anda?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Alamat</p>
                    <p className="text-gray-300">JL. ROGONOTO 217, Losari, Singosari, Malang, Jawa Timur</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Telepon</p>
                    <p className="text-gray-300">085285703497</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">info@herawati.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h4>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors cursor-pointer">
                    <Twitter className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Pesan</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Tulis pesan Anda..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">HERAWATI</h3>
                  <p className="text-xs text-orange-300">Food & Meta Ads Creative</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Pioneer dalam industri makanan dan solusi Meta Ads kreatif di Indonesia.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Meta Ads Strategy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Food Photography</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Audience Targeting</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Creative Content</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-orange-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Layanan</a></li>
                <li><a href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Dapatkan tips dan trik terbaru tentang Meta Ads untuk industri makanan.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-colors">
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 HERAWATI. All rights reserved. | Food & Meta Ads Creative Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  )
}