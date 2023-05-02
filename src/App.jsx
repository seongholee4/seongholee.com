import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import '../src/assets/custom-background.css'; // Make sure to import your custom CSS file


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-zinc-950'>
        <div className='hero-background bg-cover bg-center bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Tech />
        <Experience />

        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      
    </BrowserRouter>
  )
}

export default App
