import './App.css';
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WebFont from "webfontloader";
import React from "react";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search"
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import Profile from "./component/User/Profile.js"
import UpdateProfile from "./component/User/UpdateProfile.js"




import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import { loadUser } from './actions/userAction';



function App() {
  const {isAuthenticated, user} = useSelector(state=>state.user)
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      },
    });
    store.dispatch(loadUser())
  },[])

  return (
<Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/product/:id' element={<ProductDetails />} exact />
        <Route path='/products' element={<Products />} exact />
        <Route path='/products/:keyword' element={<Products />}  />
        <Route path='/search' element={<Search />} exact />
        <Route path='/account' element={<Profile />} exact />
        <Route path='/login' element={<LoginSignUp />} exact />
        <Route path='/me/update' element={<UpdateProfile />} exact />
        
        
      </Routes>
      
      <Footer />
  </Router>
  )
  

  
}

export default App;
