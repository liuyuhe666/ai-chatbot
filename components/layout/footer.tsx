import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 py-2 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      Made with ❤️ by
      <Link href="https://github.com/liuyuhe666" target="_blank" className="ml-2 hover:underline">LiuYuhe</Link>
    </footer>
  )
}
