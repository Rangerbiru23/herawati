'use client'

import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle, Users, Gavel } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan <span className="text-orange-600">HERAWATI</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan penggunaan layanan Meta Ads dan produk makanan 
              yang disediakan oleh HERAWATI.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Terakhir diperbarui: 1 Januari 2024
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                Penerimaan Syarat
              </h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Dengan mengakses dan menggunakan layanan HERAWATI, Anda setuju untuk terikat 
                  oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun 
                  dari syarat ini, Anda tidak boleh menggunakan layanan kami.
                </p>
              </div>
            </section>

            {/* Services Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                Deskripsi Layanan
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">HERAWATI menyediakan:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Layanan Meta Ads untuk industri makanan dan minuman</li>
                  <li>Konsultasi strategi periklanan digital</li>
                  <li>Produksi konten kreatif untuk promosi makanan</li>
                  <li>Fotografi dan videografi produk makanan</li>
                  <li>Analisis dan optimasi kampanye iklan</li>
                  <li>Penjualan produk makanan dan masakan olahan</li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-orange-600 mr-3" />
                Tanggung Jawab Pengguna
              </h2>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">Sebagai pengguna, Anda bertanggung jawab untuk:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Mematuhi hukum dan peraturan yang berlaku</li>
                  <li>Tidak menggunakan layanan untuk aktivitas ilegal</li>
                  <li>Memproteksi akun dan informasi login Anda</li>
                  <li>Melaporkan masalah atau pelanggaran keamanan</li>
                  <li>Mematuhi kebijakan Meta dan platform lainnya</li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Scale className="w-6 h-6 text-purple-600 mr-3" />
                Syarat Pembayaran
              </h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Harga dan Pembayaran:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Semua harga yang tercantum adalah dalam Rupiah</li>
                      <li>Pembayaran harus dilakukan sebelum layanan dimulai</li>
                      <li>Metode pembayaran: Transfer Bank, E-Wallet, atau Kartu Kredit</li>
                      <li>Biaya tambahan mungkin berlaku untuk layanan ekstra</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Kebijakan Pengembalian:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Pengembalian dana untuk layanan yang belum dimulai: 100%</li>
                      <li>Pengembalian setelah layanan dimulai: Sesuai kebijakan masing-masing layanan</li>
                      <li>Biaya administrasi 10% untuk semua pengembalian</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Gavel className="w-6 h-6 text-red-600 mr-3" />
                Hak Kekayaan Intelektual
              </h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Hak Cipta HERAWATI:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Semua konten, desain, dan materi milik HERAWATI dilindungi hak cipta</li>
                      <li>Logo dan merek dagang adalah properti eksklusif HERAWATI</li>
                      <li>Strategi Meta Ads yang dikembangkan adalah milik HERAWATI</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Hak Klien:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Klien memiliki hak atas konten yang dibuat khusus untuk mereka</li>
                      <li>Penggunaan konten terbatas untuk tujuan promosi bisnis klien</li>
                      <li>HERAWATI berhak menggunakan portofolio untuk marketing purposes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
                Pembatasan Tanggung Jawab
              </h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">HERAWATI tidak bertanggung jawab atas:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Hasil kampanye Meta Ads yang bergantung pada faktor eksternal</li>
                  <li>Keterlambatan caused oleh pihak ketiga (Meta, bank, dll)</li>
                  <li>Kehilangan data karena kesalahan pengguna</li>
                  <li>Downtime platform Meta atau layanan pihak ketiga</li>
                  <li>Konten yang dibuat oleh pengguna atau klien</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  Tanggung jawab maksimal HERAWATI adalah sebesar biaya layanan yang dibayarkan.
                </p>
              </div>
            </section>

            {/* Service Level Agreement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                Service Level Agreement (SLA)
              </h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Meta Ads Services:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Setup kampanye: 2-3 hari kerja</li>
                      <li>Optimasi rutin: Mingguan</li>
                      <li>Report bulanan: Setiap tanggal 5</li>
                      <li>Response time: Maksimal 24 jam untuk email</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Food Products:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Pemesanan: Diproses dalam 1 hari kerja</li>
                      <li>Pengiriman: 2-5 hari kerja tergantung lokasi</li>
                      <li>Kualitas: Jaminan penggantian untuk produk rusak</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Gavel className="w-6 h-6 text-red-600 mr-3" />
                Terminasi Layanan
              </h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">HERAWATI berhak menghentikan layanan jika:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Pengguna melanggar syarat dan ketentuan</li>
                  <li>Pengguna menggunakan layanan untuk aktivitas ilegal</li>
                  <li>Pembayaran tidak dilakukan sesuai kesepakatan</li>
                  <li>Ada pelanggaran kebijakan Meta atau platform lain</li>
                  <li>Force majeure atau keadaan di luar kendali</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Pengguna juga dapat menghentikan layanan kapan saja dengan pemberitahuan 30 hari.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@herawati.com</p>
                  <p><strong>Telepon:</strong> 085285703497</p>
                  <p><strong>Alamat:</strong> JL. ROGONOTO 217, Losari, Singosari, Malang, Jawa Timur</p>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Syarat dan Ketentuan ini berlaku efektif sejak 1 Januari 2024 dan dapat diperbarui 
                dari waktu ke waktu. Perubahan akan diinformasikan melalui email atau website.
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
            &copy; 2024 HERAWATI. All rights reserved. | Terms & Conditions for Food & Meta Ads Solutions
          </p>
        </div>
      </footer>
    </div>
  )
}