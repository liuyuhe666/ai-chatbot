interface ChatbotItem {
  id: number
  name: string
  description: string
  prompt: string
}

interface SettingObject {
  apiKey: string
  providerName: string
  modelName: string
}

export type { ChatbotItem, SettingObject }
