import type { ChatbotItem } from '@/types/chatbot'
import AnimatedSvgCard from '@/components/animated-card'
import Faq from '@/components/faq'
import PageView from '@/components/page-view'
import data from '@/data/chatbot.json'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  const chatbotList: ChatbotItem[] = data
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl flex flex-col gap-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
          chatbotList.map((item) => {
            return (
              <Link href={`/chatbot/${item.id}`} key={`${item.name}-${item.id}`}>
                <div className="cursor-pointer rounded-lg flex flex-col items-center border">
                  <AnimatedSvgCard titleSize="text-2xl" titleText={item.name} />
                  <div className="w-full flex flex-row items-center justify-center gap-2 py-4">
                    <p className="text-muted-foreground hover:underline">{item.description}</p>
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            )
          })
        }
        <Link href="/">
          <div className="cursor-pointer rounded-lg flex flex-col items-center border">
            <AnimatedSvgCard titleSize="text-2xl" titleText="更多功能" />
            <div className="w-full flex flex-row items-center justify-center gap-2 py-4">
              <p className="text-muted-foreground hover:underline">敬请期待</p>
              <ArrowRight className="size-4" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">常见问题</h2>
        <Faq />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">访问统计</h2>
        <PageView />
      </div>
    </div>
  )
}
