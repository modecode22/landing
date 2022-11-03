import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import PhotoSection from './components/PhotoSection'

function App() {

  return (
    <div className='bg-slate-100'>
      <Header />
      <Hero />
      <Content />
      <PhotoSection />
      <Footer />
    </div>
  )
}

export default App
