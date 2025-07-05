import GlobalStyles from './styles/GlobalStyles'
import { AnimatePresence } from 'framer-motion'
import './font.css'
import FaqsPage from './pages/FaqsPage'
import PrivacyPage from './pages/PrivacyPolicyPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FeaturesPage from './pages/FeaturesPage'
import ChildSafetyPolicyPage from './pages/ChildSafetyPolicyPage'

function App() {
  return (
    <div>
      <GlobalStyles />
        <AnimatePresence>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<ChildSafetyPolicyPage />} />
              <Route path="/faqs" element={<FaqsPage />} />
              <Route path="/terms-and-conditions" element={<PrivacyPage />} />
              <Route path="/child-safety-policy" element={<ChildSafetyPolicyPage />} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
    </div>
  )
}

export default App
