"use client"

import * as React from "react"
import { IconMail, IconX, IconCheck, IconLoader2, IconSparkles } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useEmailCapture, useStats } from "@/hooks/use-local-storage"

export function EmailCapture() {
  const { shouldShow, markShown, markCaptured, refresh } = useEmailCapture()
  const { stats } = useStats()
  const [isVisible, setIsVisible] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = React.useState("")

  // Check if we should show after stats change
  React.useEffect(() => {
    refresh()
  }, [stats.totalExtractions, refresh])

  // Animate in when should show
  React.useEffect(() => {
    if (shouldShow) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [shouldShow])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setErrorMessage("Please enter your email")
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage("")

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source: 'extraction_prompt',
          extractionCount: stats.totalExtractions,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        markCaptured()
        // Hide after success
        setTimeout(() => {
          setIsVisible(false)
        }, 2000)
      } else {
        setErrorMessage(data.error || 'Failed to subscribe')
        setStatus('error')
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again.')
      setStatus('error')
    }
  }

  const handleClose = () => {
    markShown()
    setIsVisible(false)
  }

  if (!shouldShow) return null

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 md:left-6 z-50 transition-all duration-500 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-card/95 border-2 border-primary/30 shadow-xl backdrop-blur-xl rounded-none p-4 max-w-sm relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 w-6 h-6 rounded-none hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <IconX size={14} />
        </button>

        {status === 'success' ? (
          // Success State
          <div className="flex items-center gap-3 pr-6">
            <div className="w-12 h-12 rounded-none bg-green-500/10 flex items-center justify-center flex-shrink-0 border border-green-500/20">
              <IconCheck size={24} className="text-green-500" />
            </div>
            <div>
              <h3 className="text-foreground font-bold text-sm mb-1">
                You're subscribed!
              </h3>
              <p className="text-muted-foreground text-xs">
                We'll keep you updated on new features.
              </p>
            </div>
          </div>
        ) : (
          // Form State
          <>
            {/* Header */}
            <div className="flex items-start gap-3 mb-4 pr-6">
              <div className="w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                <IconSparkles size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-bold text-sm mb-1">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Get notified about new features and extraction tips.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <IconMail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === 'error') setStatus('idle')
                  }}
                  placeholder="you@email.com"
                  className={cn(
                    "pl-9 h-10 rounded-none text-sm",
                    status === 'error' && "border-red-500 focus:border-red-500"
                  )}
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'error' && errorMessage && (
                <p className="text-xs text-red-500">{errorMessage}</p>
              )}

              <div className="flex items-center gap-2">
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex-grow bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-none font-bold text-xs"
                >
                  {status === 'loading' ? (
                    <>
                      <IconLoader2 size={14} className="mr-1.5 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleClose}
                  className="h-9 px-3 rounded-none text-xs text-muted-foreground"
                >
                  No thanks
                </Button>
              </div>

              <p className="text-[10px] text-muted-foreground text-center">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
