import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="flex justify-between items-center p-8 border-b border-gray-800">
        <Link href="/" className="text-2xl font-black">AIHUBS</Link>
        <div className="flex gap-6 font-semibold text-gray-400">
          <Link href="/">Trang chủ</Link>
          <Link href="/directory">Danh sách AI</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <Link href="/contact" className="px-6 py-2 bg-purple-600 rounded-lg font-bold">Tham gia</Link>
      </nav>

      <section className="py-24 text-center px-6">
        <h1 className="text-6xl font-black bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">Người biết dùng AI thay thế người không biết.</h1>
        <p className="mt-6 text-xl text-gray-400">Khóa học AI dành cho người mới + Thư viện prompt thực chiến.</p>
        <Link href="#pricing" className="mt-10 inline-block px-10 py-4 bg-purple-600 rounded-xl font-bold text-lg">Đầu tư ngay</Link>
      </section>
    </main>
  );
}