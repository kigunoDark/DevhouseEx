import React from 'react';
import Footer from './components/Footer/Footer';
import LocationContainer from './components/Locations/LocationContainer';
import BakeriesContainer from "./components/Bakeries/BakeriesContainer";

function App() {
  return (
    <div className="app">
        <BakeriesContainer />
        <LocationContainer />
        <Footer />
    </div>
  );
}

export default App;
