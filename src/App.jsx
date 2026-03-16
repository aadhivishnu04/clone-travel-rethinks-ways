import Header from "./components/Header"
import Banner from "./components/Banner";

import Tags from "./components/Tags";
import Honeymooncard from "./components/Honeymooncard";

import AdBanner from "./components/Ad";
import Brandstory from "./components/Brandstory";
 
import Month from "./components/Month";

import Visacard from "./components/Visacard";
 
import UniqueStayStories from "./components/UniqueStayStories";

import AroundTheWorld from "./components/AroundTheWorld"
import VisaFreeEscapes from "./components/VisaFreeEscapes"
 
import LatestUpdates from "./components/LatestUpdates"

import TravelMood from "./components/TravelMood"
import Footer from "./components/Footer"



function App() {
  return (
    <div>
      <Header/>
      <Banner />
      
      <Tags />
      <LatestUpdates/>
    
      {/* <AdBanner /> */}
      <Honeymooncard />
    
      <Brandstory />
      
      <Month/>
  
      <Visacard/>
    
      <UniqueStayStories/>
       
      <AroundTheWorld/>
      <VisaFreeEscapes/>
      
      <TravelMood/>
      <Footer/>
       {/* <AdBanner />
       <AdBanner />
       <AdBanner />
       <AdBanner />
       <AdBanner /> */}
    </div>
  );
}

export default App;