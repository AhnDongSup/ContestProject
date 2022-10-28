import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Intro from "./Intro";
import First from "./First";
import Second from "./Second";


function App() {
  return <Router>
    <Routes>
      <Route path="/Searchword/:keyword" element={<Second />}></Route>
      <Route path="/Search" element={<First />}></Route>
      <Route path="/" element={<Intro />}></Route>
    </Routes>
  </Router>
  
}

export default App;
