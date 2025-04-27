import type { ChatbotItem } from '@/types/chatbot'
import AnimatedSvgCard from '@/components/animated-card'
import data from '@/data/chatbot.json'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  const chatbotList: ChatbotItem[] = data
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
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
    </div>
  )
}
