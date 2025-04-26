import type { ChatbotItem } from '@/types/chatbot'
import { buttonVariants } from '@/components/ui/button'
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
              <div key={item.id} className="rounded-lg p-8 shadow-sm border flex flex-col items-center hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-muted-foreground mb-2 text-sm">{item.description}</p>
                <Link href={`/chatbot/${item.id}`} className={buttonVariants({ variant: 'link' })}>
                  开始使用
                  <ArrowRight />
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
