import Image from 'next/image'
import Link from 'next/link'
import GitHubButton from '../github-button'
import Nav from '../nav'
import { SettingPanel } from '../setting-panel'
import { ThemeToggle } from '../theme-toggle'

export function Header() {
  return (
    <div className="shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-2">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <Link href="/">
            <h1 className="text-2xl font-bold ml-2">AI 聊天机器人</h1>
          </Link>
          <Nav />
        </div>
        <div className="flex items-center gap-2">
          <GitHubButton link="https://github.com/liuyuhe666/ai-chatbot" />
          <ThemeToggle />
          <SettingPanel />
        </div>
      </div>
    </div>
  )
}
