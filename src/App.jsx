// import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BreadcrumbComponent from "./components/BreadCumb";

function App() {
  return (
    <>
      <Header />
      <BreadcrumbComponent />
      <main>{/* <Outlet /> */}</main>
      <Footer />
    </>
  );
}

export default App;
