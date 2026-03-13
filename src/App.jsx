import { useEffect, useState } from 'react'
import './App.css'
import Resume from './components/Resume'
import ResumeEn from './components/ResumeEn'

function App() {
  const [lang, setLang] = useState('zh')

  useEffect(() => {
    const applyFromHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'en') {
        setLang('en')
      } else {
        setLang('zh')
        if (hash !== 'zh') {
          window.location.hash = 'zh'
        }
      }
    }

    applyFromHash()
    window.addEventListener('hashchange', applyFromHash)
    return () => window.removeEventListener('hashchange', applyFromHash)
  }, [])

  return (
    <div className="app">
      {lang === 'en' ? <ResumeEn currentLang={lang} /> : <Resume currentLang={lang} />}
    </div>
  )
}

export default App
