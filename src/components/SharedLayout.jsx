import { Outlet } from "react-router-dom";
import MyAppBar from "./AppBar/AppBar";


const SharedLayout = () => {
  return (
    <>
    <MyAppBar/>
    <Outlet/>
    </>


    // <Container>
    //   <AppBar>
    //     <Navigation />
    //     <UserMenu />
    //   </AppBar>

    //   <Suspense fallback={<div>Loading...</div>}>
    //     <Outlet />
    //   </Suspense>
    // </Container>
  );
};

export default SharedLayout;