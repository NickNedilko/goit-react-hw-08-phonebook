import Login from "Pages/Login/Login";
import Registranion from "Pages/Registration/Registration";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";


import { Home } from "Pages/Home/Home";
import ContactsPage from "Pages/Contacts/Contacts";
import { RestrictedRoute } from "./restrictedRoute";
import { PrivatedRoute } from "./privateRoute";

export const App = () => {
  const str = 'dsvfdgbhfjkhgfdsdfgh';
  const res = [...str].join('-<>-');
  console.log(res)


  return (
    <div>

    <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home/>}/>
        <Route path="register" element={<RestrictedRoute component={Registranion} redirectTo="/contacts"/>}/>
        <Route path="login" element={<RestrictedRoute component={Login} redirectTo="/contacts"/>}/>
        <Route path="contacts"element={<PrivatedRoute component={ContactsPage} redirectTo="/login"/>}/>
        </Route>
      </Routes>
    </div>
  );
};
