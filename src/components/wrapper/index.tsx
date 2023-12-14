import React, { FC } from 'react' // Use `FC` for functional components
import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { GetLanguage, SetLanguage, userLogout } from '../../utils/helper'
import i18n from '../../i18n'

// Use type annotations for function parameters and return values
type Props = {
  children: React.ReactNode
  toggleTheme: () => void
}

const MainTemplateContainer: FC<Props> = ({ children, toggleTheme }) => {
  const dispatch = useDispatch()

  // Define types for functions
  type Language = string | null

  // Type annotations for variables
  const lang: Language = GetLanguage()

  const Logout = () => {
    userLogout()
  }

  const changeLanguage = (e: SelectChangeEvent<string>) => {
    const selectedLang = e.target.value

    SetLanguage(dispatch, selectedLang)
    i18n.changeLanguage(selectedLang)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu/Logo
          </Typography>
          <Button color="inherit" onClick={() => toggleTheme()}>
            Theme toggle
          </Button>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang || 'en'}
            label="Language"
            onChange={(e: SelectChangeEvent<string>) => changeLanguage(e)}
          >
            <MenuItem value={'en'}>En</MenuItem>
            <MenuItem value={'ja'}>Ja</MenuItem>
          </Select>
          <Button color="inherit" onClick={Logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  )
}

export default MainTemplateContainer
