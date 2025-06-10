import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full" id="faq">
      <AccordionItem value="item-1">
        <AccordionTrigger>AI 聊天机器人对生成的内容没有限制吗 ？</AccordionTrigger>
        <AccordionContent>
          我们遵守社区准则，禁止非法、有害或明确不适当的内容，以确保为所有用户提供一个安全的环境。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>如何获取 API Key ？</AccordionTrigger>
        <AccordionContent>
          所有的功能均来自各个 AI 提供商，详细信息请参考各个 AI 提供商的开发文档。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>更多问题 ...</AccordionTrigger>
        <AccordionContent>
          <Link href="https://github.com/liuyuhe666/ai-chatbot/issues" target="_blank">https://github.com/liuyuhe666/ai-chatbot/issues</Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
