import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BreadcrumbComponent from "./components/BreadCumb";

function App() {
  return (
    <>
      <div className="fixed z-10 left-0 right-0">
        <Header />
      </div>
      <BreadcrumbComponent />
      <main className="px-1 lg:px-7 mt-[84px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
