import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNewItem from "./Pages/AddNewItem/AddNewItem";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import ManageStokes from "./Pages/ManageStokes/ManageStokes";
import MyAddedItem from "./Pages/MyAddedItem/MyAddedItem";
import NotFound from "./Pages/NotFound/NotFound";
import Notification from "./Pages/Notification/Notification";
import Profile from "./Pages/Profile/Profile";
import RateUs from "./Pages/RateUs/RateUs";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import SignUp from "./Pages/SignUp/SignUp";
import Table from "./Pages/Table/Table";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageStoke"
          element={<ManageStokes></ManageStokes>}
        ></Route>
        <Route
          path="/addNewItem"
          element={
            <RequireAuth>
              <AddNewItem></AddNewItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItem"
          element={
            <RequireAuth>
              <MyAddedItem></MyAddedItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/notification"
          element={<Notification></Notification>}
        ></Route>
        <Route path="/table" element={<Table></Table>}></Route>
        <Route path="/rateUs" element={<RateUs></RateUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
