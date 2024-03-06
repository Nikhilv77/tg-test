import GlobalStyles from './styles/GlobalStyles'
import { AnimatePresence } from 'framer-motion'
import './font.css'
import FaqsPage from './pages/FaqsPage'
import PrivacyPage from './pages/PrivacyPolicyPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FeaturesPage from './pages/FeaturesPage'

function App() {
  return (
    <div>
      <GlobalStyles />
        <AnimatePresence>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/faqs" element={<FaqsPage />} />
              <Route path="/terms-and-conditions" element={<PrivacyPage />} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
    </div>
  )
}

export default App
