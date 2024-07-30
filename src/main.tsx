import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './components/footer.tsx'
import ApplictionRoutes from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex flex-col min-h-screen bg-neutral-100'>
      <ApplictionRoutes />
      <Footer />
    </div>
  </React.StrictMode>,
)
