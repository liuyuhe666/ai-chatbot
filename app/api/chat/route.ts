import { createAnthropic } from '@ai-sdk/anthropic'
import { createCerebras } from '@ai-sdk/cerebras'
import { createDeepInfra } from '@ai-sdk/deepinfra'
import { createDeepSeek } from '@ai-sdk/deepseek'
import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { createGroq } from '@ai-sdk/groq'
import { createMistral } from '@ai-sdk/mistral'
import { createOpenAI } from '@ai-sdk/openai'
import { createXai } from '@ai-sdk/xai'
import { streamText } from 'ai'

type ProviderFactory = (config: { apiKey: string }) => (modelName: string) => any

const providerMap: Record<string, ProviderFactory> = {
  'OpenAI': createOpenAI,
  'xAI Grok': createXai,
  'Anthropic': createAnthropic,
  'Groq': createGroq,
  'DeepInfra': createDeepInfra,
  'Mistral': createMistral,
  'Google Generative AI': createGoogleGenerativeAI,
  'Cerebras': createCerebras,
  'DeepSeek': createDeepSeek,
}

function getModel(apiKey: string, providerName: string, modelName: string) {
  const createProvider = providerMap[providerName] || providerMap.DeepSeek
  return createProvider({ apiKey })(modelName)
}

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages, apiKey, providerName, modelName, prompt } = await req.json()

  const result = streamText({
    model: getModel(apiKey, providerName, modelName),
    messages,
    system: prompt,
  })

  return result.toDataStreamResponse()
}
