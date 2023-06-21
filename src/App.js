
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Condiciones'
import Contact from './components/Contact'

import Container from './components/Container'
function App() {

  return (
    <>
    <Navbar/>
    <Main/>
    <Container>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </Container>
    </>
  );
}

export default App;
