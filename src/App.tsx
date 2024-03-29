import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { selectMode } from 'src/shared/redux/settingsSlice/selectors'
import { useAppSelector } from 'src/shared/redux/store'

import Main from 'src/features/Main'
import Landing from 'src/features/Landing'
import About from 'src/features/About'
import Menu from './features/Menu'
import Order from './features/Order'

import theme from './shared/lib/theme'

import './assets/fonts/stylesheet.css'

import GlobalStyle from './shared/lib/globalStyles'
import './App.css'

function App() {
  const mode = useAppSelector(selectMode)

  return (
    <ThemeProvider theme={theme[mode]}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/order' element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
