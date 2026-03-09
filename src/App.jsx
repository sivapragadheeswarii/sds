import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
//  import Courses from './pages/Courses'
// import Contact from './pages/Contact'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import CustomSoftware from "./pages/CustomSoftware"
import WebDevelopment from './pages/WebDevelopment'
import AppDevelopment from './pages/AppDevelopment'
import DigitalMarketing from './pages/DigitalMarketing'
import GraphicDesign from './pages/GraphicDesign'
import SEO from './pages/SEO'
function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
