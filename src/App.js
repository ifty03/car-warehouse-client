import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNewItem from "./Pages/AddNewItem/AddNewItem";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import ManageStokes from "./Pages/ManageStokes/ManageStokes";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={<Inventory></Inventory>}
        ></Route>
        <Route
          path="/manageStoke"
          element={<ManageStokes></ManageStokes>}
        ></Route>
        <Route path="/addNewItem" element={<AddNewItem></AddNewItem>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
