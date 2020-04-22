import React from 'react';
import Footer from './components/Footer/Footer';
import LocationContainer from './components/Locations/LocationContainer';
import Bakeries from './components/Bakers/Bakeries';

function App() {
  return (
    <div className="App">
        <Bakeries />
        <LocationContainer />
        <Footer />
    </div>
  );
}

export default App;
