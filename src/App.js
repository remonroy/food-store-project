import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import AddProduct from './Component/DashbordSection/AddProduct/AddProduct';
import AddAmin from './Component/DashbordSection/AddAmin/AddAmin';
import MangeProduct from './Component/DashbordSection/MangeProduct/MangeProduct';
import UserOrder from './Component/DashbordSection/UserOrder/UserOrder';
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
import PrivetRoute from './Component/Login/PrivetRoute';
import OrderList from './Component/DashbordSection/OrderList/OrderList';
import BookingList from './Component/DashbordSection/BookingList/BookingList';
import ReviewSend from './Component/DashbordSection/ReviewSend/ReviewSend';
import Sidebar from './Component/DashbordSection/Sidebar/Sidebar';
import MainAdminPannel from './Component/MainAdminPannel/MainAdminPannel';
export const userContext=createContext()

function App() {
  const [loogeduser,setLoogeduser]=useState([])
  return (
    <userContext.Provider value={[loogeduser,setLoogeduser]}>
      <Router>
        {/* <h1>Email:{loogeduser.email}</h1> */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <PrivetRoute path="/addminPannel">
            <MainAdminPannel></MainAdminPannel>
          </PrivetRoute>
          
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/addAdmin">
            <AddAmin></AddAmin>
          </Route>
          <Route path="/manageProduct">
            <MangeProduct></MangeProduct>
          </Route>
          <PrivetRoute path="/orderBook/:id">
            <UserOrder></UserOrder>
          </PrivetRoute>
          <Route path="/orderBook">
            <UserOrder></UserOrder>
          </Route>
          <Route path="/review">
            <ReviewSend></ReviewSend>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
