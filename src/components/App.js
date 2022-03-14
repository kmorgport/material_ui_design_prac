import React, {useState } from "react";
import Header from '../components/ui/Header'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import theme from './ui/Theme'
import Footer from '../components/ui/Footer'
import LandingPage from './LandingPage';
import Services from './Services'
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";

function App() {
  const [ selectedIndex, setSelectedIndex ] = useState(0)
  const [value, setValue] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
          value={value} 
          setValue={setValue} 
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          />
        <Routes>
          <Route exact path="/" 
            element={
              <LandingPage 
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route exact path="services" 
            element={
              <Services 
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route exact path="/customsoftware" 
            element={
              <CustomSoftware 
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route exact path="/mobileapps" 
            element={
              <MobileApps
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route exact path="/websites" element={<div>Websites</div>}/>
          <Route exact path="/revolution" element={<div>Revolution</div>}/>
          <Route exact path="/about" element={<div>About</div>}/>
          <Route exact path="/contact" element={<div>Contact</div>}/>
          <Route exact path="/estimate" element={<div>Estimate</div>}/>
        </Routes>
        <Footer
          value={value} 
          setValue={setValue} 
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
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
