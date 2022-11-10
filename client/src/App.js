import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./language";
// pages
import Home from "./pages/Home";
import Authenication from "./pages/Authentication";

function App() {
  return (
    // LanugageProvider je funkcija pa je sve izmedju argument?
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path='/' index element={<Home></Home>}></Route>
          <Route path='/auth' element={<Authenication></Authenication>}></Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
