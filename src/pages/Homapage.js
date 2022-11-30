import "../assets/css/style.css"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Facts from "../components/Facts"
import Skills from "../components/Skills"
import Resume from "../components/Resume"
import Portfolio from "../components/Portofolio"
import Testimonial from "../components/Testimonial"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


export default function Homepage() {
    return (
        <div>
  <Header />
  <Hero />
  <main id="main">
  <About />
  <Facts />
  <Skills />
  <Resume />
  <Portfolio />
  <Testimonial />
  <Contact />
  </main>
  <Footer />
  <div id="preloader" />
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
</div>

    )
}