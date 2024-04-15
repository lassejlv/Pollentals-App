import { Link } from "react-router-dom";


export default function App() {
  return (
    <main className="container mx-auto pt-10">
      <Link to={"/map"} className="bg-lightGreen px-8 py-3 rounded-md text-white font-bold">
        Go to map
      </Link>
    </main>
  )
}
