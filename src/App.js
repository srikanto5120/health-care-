import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Apoinment from "./Component/Apoinment/Apoinment";
import About from "./Component/Home/About/About";
import Banner from "./Component/Home/Banner/Banner";
import Contact from "./Component/Home/Contact/Contact";
import Footer from "./Component/Home/Footer/Footer";
import Header from "./Component/Home/Header/Header";

import Home from "./Component/Home/Home";
import Services from "./Component/Home/Services/Services";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Register from "./Component/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import Details from "./Details/Details";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/banner">
              <Banner></Banner>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:id">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute Route path="/book">
              <Apoinment></Apoinment>
            </PrivateRoute>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
