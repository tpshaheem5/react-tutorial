import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        height: "100vh",
      }}
    >
       <h1>Switch Theme Black And white</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Theme</button>
    </div>
  );
}

export default App;
