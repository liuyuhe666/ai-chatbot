import type { ChatbotItem } from '@/types/chatbot'

import Chatbot from '@/components/chatbot'
import data from '@/data/chatbot.json'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const chatbotList = data as ChatbotItem[]
  const chatbot = chatbotList.find(item => item.id === Number(id))

  return (
    <div className="container mx-auto">
      {
        chatbot && <Chatbot chatbot={chatbot} />
      }
    </div>
  )
}
