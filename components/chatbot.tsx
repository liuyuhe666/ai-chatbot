/* eslint-disable array-callback-return */
'use client'

import type { ChatbotItem, SettingObject } from '@/types/chatbot'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { SETTING_KEY } from '@/constants/chatbot'
import { useChat } from '@ai-sdk/react'
import { Bot, Rocket, User } from 'lucide-react'
import { useLocalStorage } from 'react-use'
import { toast } from 'sonner'
import LoadingButton from './loading-button'
import { Textarea } from './ui/textarea'

export default function Chatbot({ chatbot }: { chatbot: ChatbotItem }) {
  const [settingValue] = useLocalStorage<SettingObject>(SETTING_KEY)
  if (!settingValue?.apiKey) {
    toast.error('请先设置 API Key')
  }
  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    body: {
      id: chatbot.id,
      name: chatbot.name,
      description: chatbot.description,
      prompt: chatbot.prompt,
      apiKey: settingValue?.apiKey,
      providerName: settingValue?.providerName,
      modelName: settingValue?.modelName,
    },
  })
  if (status === 'error') {
    toast.error('发生错误，请稍后再试')
  }
  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">{`我是 ⌈ ${chatbot.name} ⌋，很高兴见到你！`}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-4">
                <span className="text-center">{chatbot.description}</span>
                <span className="text-center">{chatbot.prompt}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col gap-4">
        {messages.map(message => (
          message.role === 'user'
            ? (
                <div className="flex flex-row-reverse" key={message.id}>
                  <div className="flex flex-row gap-2 items-start">
                    {message.parts.map((part, index) => {
                      switch (part.type) {
                        case 'text':
                          return <div key={`${message.id}-${index}`} className="p-2 bg-card rounded-lg shadow-sm border">{part.text}</div>
                      }
                    })}
                    <Button variant="outline" size="icon"><User /></Button>
                  </div>
                </div>
              )
            : (
                <div className="flex flex-row" key={message.id}>
                  <div className="flex flex-row gap-2 items-start">
                    <Button variant="outline" size="icon"><Bot /></Button>

                    {message.parts.map((part, index) => {
                      switch (part.type) {
                        case 'text':
                          return <div key={`${message.id}-${index}`} className="p-2 bg-card rounded-lg shadow-lg border">{part.text}</div>
                      }
                    })}
                  </div>
                </div>
              )
        ))}
        <div className="mx-auto">{status === 'streaming' ? <LoadingButton /> : null}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <Textarea placeholder={`给 ⌈ ${chatbot.name} ⌋ 发送消息`} rows={2} value={input} onChange={handleInputChange} />
        <div className="flex flex-row-reverse py-2">
          <Button type="submit">
            发送
            <Rocket />
          </Button>
        </div>
      </form>
    </div>
  )
}
