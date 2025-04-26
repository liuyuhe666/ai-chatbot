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

function getModel(apiKey: string, providerName: string, modelName: string) {
  if (providerName === 'OpenAI') {
    return createOpenAI({
      apiKey,
    })(modelName)
  }
  else if (providerName === 'xAI Grok') {
    return createXai({
      apiKey,
    })(modelName)
  }
  else if (providerName === 'Anthropic') {
    return createAnthropic({
      apiKey,
    })(modelName)
  }
  else if (providerName === 'Groq') {
    return createGroq({
      apiKey,
    })(modelName)
  }
  else if (providerName === 'DeepInfra') {
    return createDeepInfra({
      apiKey,
    })(modelName)
  }
  else if (providerName === 'Mistral') {
    return createMistral({
      apiKey,
    })(modelName)
  }
  else if (providerName === 'Google Generative AI') {
    return createGoogleGenerativeAI({
      apiKey,
    })(modelName)
  }
  else if (providerName === 'Cerebras') {
    return createCerebras({
      apiKey,
    })(modelName)
  }
  else {
    return createDeepSeek({
      apiKey,
    })(modelName)
  }
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
