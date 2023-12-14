import { useState, useEffect } from 'react'
import { lightTheme, darkTheme } from '../assets/style/theme'

type Theme = typeof lightTheme | typeof darkTheme

const useThemeSelector = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem('mode') === 'dark' ? darkTheme : lightTheme
  )
  const {
    palette: { mode },
  } = theme

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
  }, [mode])

  const toggleTheme = (): void => {
    if (mode === 'light') {
      localStorage.setItem('mode', 'dark')
      setTheme(darkTheme)
    } else {
      localStorage.setItem('mode', 'light')
      setTheme(lightTheme)
    }
  }

  return [theme, toggleTheme]
}

export default useThemeSelector
