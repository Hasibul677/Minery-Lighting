import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login'
import Lamp from './pages/Lamp/Lamp';
import Navigation from './shared/Navigation/Navigation';
import Registration from './pages/Login/Registration/Registration';
import AuthProvider from './context/AuthProvider';
import DashBoard from './pages/DashBoard/DashBoard';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import UpdateProduct from './pages/DashBoard/ManageProduct/UpdateProduct/UpdateProduct';
import Booking from './pages/Home/Products/Booking/Booking';
import NotFound from './pages/NotFound/NotFound'
import Footer from './shared/Footer/Footer';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path='/contact'>
              <Navigation></Navigation>
              <Contact></Contact>
              <Footer></Footer>
            </Route>

            <Route path='/dashboard'>
             <Navigation></Navigation>
              <DashBoard></DashBoard>
            </Route>
         
            <Route path='/lamp'>
              <Navigation></Navigation>
              <Lamp></Lamp>
              <Footer></Footer>
            </Route>

            <PrivateRoute path='/booking/:id'>
              <Navigation></Navigation>
              <Booking></Booking>
            </PrivateRoute>

            <AdminRoute path='/updateProduct/:id'>
              <UpdateProduct></UpdateProduct>
            </AdminRoute>

            <Route path='*'>
              <Navigation></Navigation>
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
