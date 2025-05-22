'use client'

import type { SettingObject } from '@/types/chatbot'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SETTING_KEY } from '@/constants/chatbot'
import { Settings } from 'lucide-react'
import { useState } from 'react'
import { useLocalStorage } from 'react-use'
import { toast } from 'sonner'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function SettingPanel() {
  const [settingValue, setSettingValue] = useLocalStorage<SettingObject>(SETTING_KEY, {
    apiKey: '',
    providerName: 'DeepSeek',
    modelName: 'deepseek-reasoner',
  })
  const [apiKey, setApiKey] = useState(settingValue?.apiKey)
  const [providerName, setProviderName] = useState(settingValue?.providerName)
  const [modelName, setModelName] = useState(settingValue?.modelName)
  const { data, error, isLoading } = useSWR('/api/model', fetcher)
  if (error) {
    toast.error('获取模型数据失败')
  }
  const modelData = data as Record<string, string[]>
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>设置</DialogTitle>
          <DialogDescription>
            设置你的 API Key 和 AI 模型
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              API Key
            </Label>
            <Input className="col-span-3" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="请输入你的 API Key" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              AI 模型
            </Label>
            {
              isLoading
                ? (<div>Loading...</div>)
                : (
                    <Select
                      defaultValue={`${providerName}:${modelName}`}
                      onValueChange={(value) => {
                        const [provider, model] = value.split(':')
                        setProviderName(provider)
                        setModelName(model)
                        toast.success('模型切换成功')
                      }}
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="选择 AI 模型" />
                      </SelectTrigger>
                      <SelectContent>
                        {
                          Object.keys(modelData).map((item1) => {
                            return (
                              <SelectGroup key={item1}>
                                <SelectLabel>{item1}</SelectLabel>
                                {
                                  modelData[item1].map((item2) => {
                                    return (
                                      <SelectItem key={item2} value={`${item1}:${item2}`}>
                                        {item2}
                                      </SelectItem>
                                    )
                                  })
                                }
                              </SelectGroup>
                            )
                          })
                        }
                      </SelectContent>
                    </Select>
                  )
            }
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              setSettingValue({
                apiKey: apiKey ?? '',
                providerName: providerName ?? '',
                modelName: modelName ?? '',
              })
              window.location.reload()
              toast.success('设置已保存')
            }}
          >
            保存
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
