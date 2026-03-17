import Header from "./components/Header"
import Banner from "./components/Banner";

import Tags from "./components/Tags";
import Honeymooncard from "./components/Honeymooncard";


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
    <div className="space-y-8 md:space-y-10">"
      <Header/>
      <Banner />
      <Tags />
      <LatestUpdates/>
    <Honeymooncard />
    <Brandstory />
      <Month/>
  <Visacard/>
    <UniqueStayStories/>
       <AroundTheWorld/>
      <VisaFreeEscapes/>
      <TravelMood/>
      <Footer/>
       
    </div>
  );
}

export default App;