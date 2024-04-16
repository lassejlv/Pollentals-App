export default function Navbar() {
  const pathName =
    typeof window !== "undefined" ? window.location.pathname : "";

  console.log(pathName);

  return (
    <nav className="flex w-full items-center justify-center bg-lightGreen p-4">
      {pathName === "/map" ? (
        <h1 className="text-2xl font-bold text-white">Map</h1>
      ) : pathName === "/settings" ? (
        <h1 className="text-2xl font-bold text-white">Settings</h1>
      ) : (
        <h1 className="text-2xl font-bold text-white">Home</h1>
      )}
    </nav>
  );
}
