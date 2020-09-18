import React,  {useEffect} from "react";
import "./App.css";
import axios from 'axios'
import PhotoOfTheDay from "./components/PhotoOfTheDay"

function App() {
  return (
    <div className="App">
      <PhotoOfTheDay></PhotoOfTheDay>
    </div>
  );
}

export default App;
