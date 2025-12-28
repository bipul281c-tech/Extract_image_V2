"use client"

import * as React from "react"
import { IconDownload, IconX, IconDeviceMobile } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePwaInstall } from "@/hooks/use-pwa-install"

export function PwaInstallPrompt() {
  const { isInstallable, isInstalled, showPrompt, triggerInstall, dismissPrompt } = usePwaInstall()
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    if (showPrompt && isInstallable && !isInstalled) {
      // Delay showing for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 500)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [showPrompt, isInstallable, isInstalled])

  const handleInstall = async () => {
    const installed = await triggerInstall()
    if (installed) {
      setIsVisible(false)
    }
  }

  if (!showPrompt || !isInstallable || isInstalled) return null

  return (
    <div
      className={cn(
        "fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 transition-all duration-500 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-card/95 border-2 border-primary/30 shadow-xl backdrop-blur-xl rounded-none p-4 max-w-sm">
        {/* Close button */}
        <button
          onClick={dismissPrompt}
          className="absolute top-2 right-2 w-6 h-6 rounded-none hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <IconX size={14} />
        </button>

        {/* Content */}
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
            <IconDeviceMobile size={24} className="text-primary" />
          </div>

          {/* Text */}
          <div className="flex-grow pr-4">
            <h3 className="text-foreground font-bold text-sm mb-1">
              Install ExtractPics
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed mb-3">
              Add to your home screen for quick access and offline support.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                onClick={handleInstall}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 rounded-none font-bold text-xs shadow-none"
              >
                <IconDownload size={14} className="mr-1.5" />
                Install
              </Button>
              <Button
                onClick={dismissPrompt}
                variant="ghost"
                size="sm"
                className="h-8 px-3 rounded-none text-xs text-muted-foreground hover:text-foreground"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
