import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { OpenProvider } from './context/OpenContext.jsx'

createRoot(document.getElementById('root')).render(
   <OpenProvider>
      <App />
   </OpenProvider>
)
