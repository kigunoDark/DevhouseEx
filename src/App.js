import React from 'react';
import Footer from './components/Footer/Footer';
import LocationContainer from './components/Locations/LocationContainer';
import Bakeries from './components/Bakeries/Bakeries';
function App() {
  return (
    <div className="app">
        <Bakeries />
        <LocationContainer />
        <Footer />
    </div>
  );
}

export default App;
