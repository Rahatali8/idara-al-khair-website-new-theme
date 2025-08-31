"use client"

import { useEffect } from "react"

export default function FontFallback() {
  useEffect(() => {
    if (typeof document === "undefined") return

    // Detect whether TypoGraphica loaded; if not, add a fallback class
    if (document.fonts && document.fonts.check) {
      // wait up to 2s for the font to load
      const timeout = setTimeout(() => {
        if (!document.fonts.check('1rem "TypoGraphica"')) {
          document.documentElement.classList.add("font-fallback")
        }
      }, 2000)

      document.fonts.ready
        .then(() => {
          clearTimeout(timeout)
          if (!document.fonts.check('1rem "TypoGraphica"')) {
            document.documentElement.classList.add("font-fallback")
          }
        })
        .catch(() => {
          document.documentElement.classList.add("font-fallback")
        })
    } else {
      // Older browsers: enable fallback immediately
      document.documentElement.classList.add("font-fallback")
    }
  }, [])

  return null
}
