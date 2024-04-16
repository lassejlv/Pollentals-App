import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Link
        to={"/map"}
        className="rounded-md bg-lightGreen px-8 py-3 font-bold text-white"
      >
        Go to map
      </Link>

      <Footer />
    </>
  );
}
