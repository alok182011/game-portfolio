import "./App.css";

import { ComponentProvider } from "./context/components";

import Homepage from "./pages/Homepage";

function App() {
  return (
    <ComponentProvider>
      <Homepage />
    </ComponentProvider>
  );
}

export default App;
