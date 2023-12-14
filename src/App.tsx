import React from 'react'
import './i18n'
import './App.css'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import routes from './routes'
import { path } from './utils/constant'
import { GetToken } from './utils/helper'
import useThemeSelector from './hook/useThemeSelector'
import MainTemplateContainer from './components/wrapper'
// Import types
import { Theme } from '@mui/material/styles'

// Define routes interface
interface Route {
  path: string
  component: () => JSX.Element
  isAuth?: boolean | undefined
}

function App() {
  // Use type for userToken
  const userToken: string | null = GetToken()

  // Define theme type and toggleTheme function type
  const [theme, toggleTheme]: [Theme, () => void] = useThemeSelector()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {/* Map routes and use type annotations */}
            {routes().map((route: Route) => {
              const WrappedComponent = route.isAuth ? (
                <MainTemplateContainer toggleTheme={toggleTheme}>
                  {route.component()}
                </MainTemplateContainer>
              ) : (
                <route.component />
              )

              return (
                <Route
                  path={route.path}
                  key={route.path}
                  element={WrappedComponent}
                />
              )
            })}
            <Route
              path="/"
              element={
                <Navigate
                  replace
                  to={userToken ? path.PLAYGROUND_PAGE : path.LOGIN_PAGE}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
