import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App.jsx'
import HomePage from './pages/homePage/HomePage.jsx'
import EmployeesPage from './pages/employeesPage/EmployeesPage.jsx'
import GlobalStyle from './utils/GlobalStyle.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Provider store={ store }>
                <App>
                    <GlobalStyle />
                    
                    <Routes>
                        <Route path="/" element={ <HomePage /> } />
                        <Route path="/employees" element={ <EmployeesPage /> } />
                    </Routes>
                </App>
        </Provider>
    </BrowserRouter>
  </StrictMode>,
)
