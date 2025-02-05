// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoApp from './08-useReducer/TodoApp'
// import HooksApp from './HooksApp.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <HooksApp />
    <TodoApp/>
  // </StrictMode>,
)
