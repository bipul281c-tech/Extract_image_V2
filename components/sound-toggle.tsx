"use client"

import * as React from "react"
import { IconVolume, IconVolumeOff } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { useSound } from "@/hooks/use-sound"

export function SoundToggle() {
  const { isEnabled, toggleSound } = useSound()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-none border-border/50"
        disabled
      >
        <IconVolume size={16} />
      </Button>
    )
  }

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleSound}
            className="h-8 w-8 rounded-none border-border/50 hover:bg-primary/10 hover:border-primary/30"
          >
            {isEnabled ? (
              <IconVolume size={16} className="text-primary" />
            ) : (
              <IconVolumeOff size={16} className="text-muted-foreground" />
            )}
            <span className="sr-only">
              {isEnabled ? 'Disable sounds' : 'Enable sounds'}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isEnabled ? 'Sound effects on' : 'Sound effects off'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
