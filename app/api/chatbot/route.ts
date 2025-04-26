import type { ChatbotItem } from '@/types/chatbot'
import type { NextRequest } from 'next/server'
import data from '@/data/chatbot.json'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) {
    return NextResponse.json(data)
  }
  const chatbotList = data as ChatbotItem[]
  const chatbot = chatbotList.find(item => item.id === Number(id))
  if (!chatbot) {
    return NextResponse.json({ msg: 'not found', code: 404, data: null })
  }
  return NextResponse.json({ msg: 'ok', code: 200, data: chatbot })
}
