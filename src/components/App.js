import React from "react";
import Header from '../components/ui/Header'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import theme from './ui/Theme'
import Footer from '../components/ui/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<div style={{height:"2000px"}}>Home</div>}/>
          <Route exact path="/services" element={<div>Services</div>}/>
          <Route exact path="/customsoftware" element={<div>Custom Software</div>}/>
          <Route exact path="/mobileapps" element={<div>Mobile Apps</div>}/>
          <Route exact path="/websites" element={<div>Websites</div>}/>
          <Route exact path="/revolution" element={<div>Revolution</div>}/>
          <Route exact path="/about" element={<div>About</div>}/>
          <Route exact path="/contact" element={<div>Contact</div>}/>
          <Route exact path="/estimate" element={<div>Estimate</div>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')} */}
    </ThemeProvider>
  );
}

export default App;
