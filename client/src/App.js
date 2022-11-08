import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from "./language";

function App() {
  return (
    // LanugageProvider je funkcija pa je sve izmedju argument?
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path='/' index element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
