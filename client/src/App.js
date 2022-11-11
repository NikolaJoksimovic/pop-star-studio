import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contex/language";
import { CookieProvider } from "./contex/cookies";
import Home from "./pages/Home";
import Authenication from "./pages/Authentication";
import SharedFooter from "./pages/SharedFooter";

function App() {
  return (
    // LanugageProvider je funkcija pa je sve izmedju argument?
    <LanguageProvider>
      <CookieProvider>
        <Router>
          <Routes>
            <Route path='/' element={<SharedFooter></SharedFooter>}>
              <Route path='/' index element={<Home></Home>}></Route>
              <Route
                path='/auth'
                element={<Authenication></Authenication>}
              ></Route>
            </Route>
          </Routes>
        </Router>
      </CookieProvider>
    </LanguageProvider>
  );
}

export default App;
