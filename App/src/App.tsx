import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './Components/layout/MainLayout'
import { HomePage } from './pages/Home'

const ProductsPage = lazy(() => import('./pages/Products/Products'))
const ConnectionsPage = lazy(() => import('./pages/Connections/Connections'))
const SolutionsPage = lazy(() => import('./pages/Solutions/Solutions'))
const PricingPage = lazy(() => import('./pages/Pricing/Pricing'))
const AboutPage = lazy(() => import('./pages/About/About'))
const ContactPage = lazy(() => import('./pages/Contact/Contact'))

function PageFallback() {
  return (
    <div className="route-loading" role="status">
      Loading…
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/connections" element={<ConnectionsPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
