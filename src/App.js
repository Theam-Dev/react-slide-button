import './App.css';
import SlideButton from 'react-slide-button';
import React from "react";

function App() {
  const [reset, setReset] = React.useState(0);
  return (
    <div className="App">
      <h2>React using react-slide-button</h2>
      <SlideButton
        mainText="slide me"
        overlayText="S I K E"
        onSlideDone={function () {
          console.log("Done!");
        }}
        reset={reset}
      />

      <button onClick={() => {
        setReset(counter => counter + 1)
      }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
