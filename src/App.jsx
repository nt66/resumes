import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Resume from './components/Resume'
import ResumeEn from './components/ResumeEn'

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/resumes">
        <Routes>
          <Route path="/" element={<Navigate to="/zh" replace />} />
          <Route path="/zh" element={<Resume />} />
          <Route path="/en" element={<ResumeEn />} />
          <Route path="*" element={<Navigate to="/zh" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
