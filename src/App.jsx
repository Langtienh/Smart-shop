import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="fixed z-10 top-0 left-0 right-0">
        <Header />
      </div>
      <main className="px-1 lg:px-7 mt-[130px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
