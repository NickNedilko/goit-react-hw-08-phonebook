import Login from "Pages/Login/Login";
import Registranion from "Pages/Registration/Registration";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";

import Contacts from "Pages/Contacts/Contacts";
import { Home } from "Pages/Home/Home";

export const App = () => {
  return (
    <div>

    <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home/>}/>
        <Route path="register" element={<Registranion/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        </Route>
      </Routes>
    </div>
  );
};
