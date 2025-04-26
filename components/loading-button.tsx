import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

export default function LoadingButton() {
  return (
    <Button disabled>
      <Loader2 className="animate-spin" />
      请稍等...
    </Button>
  )
}
