import { Link } from "react-router-dom";

export default function App() {
  return (
    <main className="container ">
      <Link
        to={"/map"}
        className="rounded-md bg-lightGreen px-8 py-3 font-bold text-white"
      >
        Go to map
      </Link>
    </main>
  );
}
