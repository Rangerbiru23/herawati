'use client'

import { ArrowLeft, Shield, Eye, Lock, User, Database, Globe, Target } from 'lucide-react'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Beranda
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">HERAWATI</h1>
                <p className="text-xs text-orange-600">Food & Meta Ads Creative</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="text-orange-600">HERAWATI</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pelanggan kami 
              dalam layanan Meta Ads dan industri makanan.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Terakhir diperbarui: 1 Januari 2024
            </div>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                Pendahuluan
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di HERAWATI. Kami menghargai privasi Anda dan berkomitmen untuk 
                  melindungi informasi pribadi yang Anda bagikan kepada kami. Kebijakan Privasi ini 
                  menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda 
                  ketika menggunakan layanan Meta Ads dan produk makanan kami.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Database className="w-6 h-6 text-green-600 mr-3" />
                Pengumpulan Data
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi yang Kami Kumpulkan:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Nama dan informasi kontak (email, telepon, alamat)</li>
                    <li>Informasi demografis untuk targeting Meta Ads</li>
                    <li>Data preferensi makanan dan minuman</li>
                    <li>Informasi pembayaran dan transaksi</li>
                    <li>Data penggunaan website dan interaksi dengan iklan</li>
                    <li>Informasi cookies dan tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-6 h-6 text-purple-600 mr-3" />
                Penggunaan Data
              </h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">Kami menggunakan data Anda untuk:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Menyediakan layanan Meta Ads yang dipersonalisasi</li>
                  <li>Mengoptimalkan kampanye periklanan untuk industri makanan</li>
                  <li>Menganalisis tren dan preferensi pasar</li>
                  <li>Memberikan rekomendasi produk makanan yang relevan</li>
                  <li>Mengirimkan newsletter dan promosi terkait</li>
                  <li>Meningkatkan pengalaman pengguna di platform kami</li>
                  <li>Memenuhi kewajiban hukum dan peraturan</li>
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-red-600 mr-3" />
                Perlindungan Data
              </h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">Kami melindungi data Anda dengan:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Enkripsi data end-to-end untuk semua transmisi</li>
                  <li>Server yang aman dengan firewall dan monitoring 24/7</li>
                  <li>Akses terbatas untuk authorized personnel saja</li>
                  <li>Backup data terencana dan recovery systems</li>
                  <li>Compliance dengan standar keamanan industri</li>
                  <li>Regular security audits dan vulnerability assessments</li>
                </ul>
              </div>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <User className="w-6 h-6 text-orange-600 mr-3" />
                Hak Pengguna
              </h2>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">Sebagai pengguna, Anda memiliki hak untuk:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Mengakses dan melihat data pribadi yang kami simpan</li>
                  <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                  <li>Menghapus data pribadi sesuai permintaan</li>
                  <li>Menolak penggunaan data untuk marketing purposes</li>
                  <li>Memport data ke platform lain (data portability)</li>
                  <li>Menarik consent untuk pengolahan data</li>
                </ul>
              </div>
            </section>

            {/* Third Party Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Globe className="w-6 h-6 text-cyan-600 mr-3" />
                Berbagi dengan Pihak Ketiga
              </h2>
              <div className="bg-cyan-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">Kami hanya berbagi data Anda dengan:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Meta Platforms untuk keperluan periklanan</li>
                  <li>Payment processors untuk transaksi keuangan</li>
                  <li>Analytics providers untuk insight bisnis</li>
                  <li>Delivery partners untuk layanan makanan</li>
                  <li>Otoritas hukum jika diwajibkan oleh peraturan</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  Kami tidak pernah menjual data pribadi Anda kepada pihak ketiga.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami atau ingin 
                  melaksanakan hak privasi Anda, silakan hubungi:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@herawati.com</p>
                  <p><strong>Telepon:</strong> 085285703497</p>
                  <p><strong>Alamat:</strong> JL. ROGONOTO 217, Losari, Singosari, Malang, Jawa Timur</p>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Kebijakan Privasi ini berlaku efektif sejak 1 Januari 2024 dan dapat diperbarui 
                dari waktu ke waktu untuk mencerminkan perubahan dalam praktik bisnis kami.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">HERAWATI</h3>
              <p className="text-xs text-orange-300">Food & Meta Ads Creative</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 HERAWATI. All rights reserved. | Privacy Policy for Food & Meta Ads Solutions
          </p>
        </div>
      </footer>
    </div>
  )
}