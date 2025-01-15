import Header from './components/Header/Header'
import './App.css'
import './index.css'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Job from './components/job/Job'

function App() {

  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Job/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
