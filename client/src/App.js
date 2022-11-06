import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' index element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
