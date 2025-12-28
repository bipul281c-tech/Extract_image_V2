"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type MascotState = 'idle' | 'working' | 'success' | 'error'

interface MascotProps {
  state?: MascotState
  size?: number
  className?: string
}

export function Mascot({ state = 'idle', size = 64, className }: MascotProps) {
  const [blink, setBlink] = React.useState(false)

  // Blinking animation for idle state
  React.useEffect(() => {
    if (state !== 'idle') return

    const blinkInterval = setInterval(() => {
      setBlink(true)
      setTimeout(() => setBlink(false), 150)
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(blinkInterval)
  }, [state])

  // Animation classes based on state
  const animationClass = React.useMemo(() => {
    switch (state) {
      case 'idle':
        return 'animate-mascot-bob'
      case 'working':
        return 'animate-mascot-peck'
      case 'success':
        return 'animate-mascot-jump'
      case 'error':
        return 'animate-mascot-shake'
      default:
        return ''
    }
  }, [state])

  // Colors
  const bodyColor = '#F87B1B' // Primary orange
  const beakColor = '#FFB84D'
  const eyeColor = state === 'error' ? '#FF4444' : '#11224E'
  const cheekColor = '#FFD4A8'

  return (
    <div
      className={cn("relative", animationClass, className)}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Body */}
        <ellipse
          cx="32"
          cy="36"
          rx="20"
          ry="22"
          fill={bodyColor}
        />

        {/* Wing */}
        <ellipse
          cx="22"
          cy="38"
          rx="8"
          ry="12"
          fill="#E06A10"
          className={state === 'working' ? 'origin-center animate-wing-flap' : ''}
        />

        {/* Belly */}
        <ellipse
          cx="32"
          cy="42"
          rx="12"
          ry="14"
          fill="#FFECD6"
        />

        {/* Head */}
        <circle
          cx="32"
          cy="20"
          r="14"
          fill={bodyColor}
        />

        {/* Face - Cheeks */}
        <circle cx="24" cy="22" r="3" fill={cheekColor} opacity="0.6" />
        <circle cx="40" cy="22" r="3" fill={cheekColor} opacity="0.6" />

        {/* Eyes */}
        {blink || state === 'success' ? (
          // Closed/happy eyes
          <>
            <path
              d="M26 18 Q28 20 30 18"
              stroke={eyeColor}
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M34 18 Q36 20 38 18"
              stroke={eyeColor}
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </>
        ) : state === 'error' ? (
          // X eyes for error
          <>
            <g transform="translate(26, 16)">
              <line x1="0" y1="0" x2="4" y2="4" stroke={eyeColor} strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="0" x2="0" y2="4" stroke={eyeColor} strokeWidth="2" strokeLinecap="round" />
            </g>
            <g transform="translate(34, 16)">
              <line x1="0" y1="0" x2="4" y2="4" stroke={eyeColor} strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="0" x2="0" y2="4" stroke={eyeColor} strokeWidth="2" strokeLinecap="round" />
            </g>
          </>
        ) : (
          // Normal eyes
          <>
            <circle cx="27" cy="18" r="4" fill="white" />
            <circle cx="37" cy="18" r="4" fill="white" />
            <circle
              cx={state === 'working' ? '28' : '27'}
              cy="18"
              r="2.5"
              fill={eyeColor}
              className={state === 'working' ? 'animate-eye-look' : ''}
            />
            <circle
              cx={state === 'working' ? '38' : '37'}
              cy="18"
              r="2.5"
              fill={eyeColor}
              className={state === 'working' ? 'animate-eye-look' : ''}
            />
            {/* Eye shine */}
            <circle cx="26" cy="17" r="1" fill="white" />
            <circle cx="36" cy="17" r="1" fill="white" />
          </>
        )}

        {/* Beak */}
        <path
          d={state === 'working'
            ? "M28 24 L32 30 L36 24 Z" // Open beak
            : "M28 24 L32 28 L36 24 Z"  // Closed beak
          }
          fill={beakColor}
          className={state === 'working' ? 'animate-beak-peck' : ''}
        />

        {/* Crown/tuft */}
        <path
          d="M28 8 Q30 4 32 8 Q34 4 36 8"
          fill={bodyColor}
          stroke={bodyColor}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Feet */}
        <g className={state === 'success' ? 'animate-feet-tap' : ''}>
          <path
            d="M26 56 L22 62 M26 56 L26 62 M26 56 L30 62"
            stroke={beakColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M38 56 L34 62 M38 56 L38 62 M38 56 L42 62"
            stroke={beakColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Success sparkles */}
        {state === 'success' && (
          <>
            <circle cx="10" cy="20" r="2" fill="#FFD700" className="animate-sparkle" />
            <circle cx="54" cy="16" r="2" fill="#FFD700" className="animate-sparkle delay-100" />
            <circle cx="8" cy="40" r="1.5" fill="#FFD700" className="animate-sparkle delay-200" />
            <circle cx="56" cy="36" r="1.5" fill="#FFD700" className="animate-sparkle delay-300" />
          </>
        )}

        {/* Working sweat drop */}
        {state === 'working' && (
          <ellipse
            cx="46"
            cy="14"
            rx="2"
            ry="3"
            fill="#87CEEB"
            className="animate-sweat-drop"
          />
        )}
      </svg>
    </div>
  )
}

// Mini version for inline use
export function MascotMini({ className }: { className?: string }) {
  return (
    <div className={cn("w-6 h-6", className)}>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Simplified mascot for small sizes */}
        <circle cx="32" cy="32" r="24" fill="#F87B1B" />
        <circle cx="26" cy="28" r="4" fill="white" />
        <circle cx="38" cy="28" r="4" fill="white" />
        <circle cx="26" cy="28" r="2" fill="#11224E" />
        <circle cx="38" cy="28" r="2" fill="#11224E" />
        <path d="M28 38 L32 44 L36 38 Z" fill="#FFB84D" />
      </svg>
    </div>
  )
}
