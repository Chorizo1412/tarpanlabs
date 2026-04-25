'use client'

import { useState, useCallback, useEffect } from 'react'

type Theme = 'a' | 'b'

const STORAGE_KEY = 'tl-theme'

const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'a'
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'b' ? 'b' : 'a'
}

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggle = useCallback(() => setTheme(theme === 'a' ? 'b' : 'a'), [theme, setTheme])

  return { theme, setTheme, toggle }
}
