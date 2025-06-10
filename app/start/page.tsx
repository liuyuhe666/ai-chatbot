import type { ChatbotItem } from '@/types/chatbot'

import Chatbot from '@/components/chatbot'

const data: ChatbotItem = {
  id: 0,
  name: 'AI 聊天机器人',
  description: '🤖 基于 Next.js 开发的多功能 AI 聊天机器人，支持多个 AI 模型，内置多种应用场景。',
  prompt: '',
}

export default function Page() {
  return (
    <div className="container mx-auto">
      <Chatbot chatbot={data} />
    </div>
  )
}
