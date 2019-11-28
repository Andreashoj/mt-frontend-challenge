import React, { useState } from "react";
import Spinner from "./components/Spinner";
import ImageGrid from "./components/ImageGrid";
import "./styles/App.css";
import Navigation from "./components/Navigation";

function App() {
  const [spinner, setSpinner] = useState(true);

  return (
    <div className="App">
      <Spinner spinner={spinner} />
      <Navigation />
      <ImageGrid setSpinner={setSpinner} />
    </div>
  );
}

export default App;
