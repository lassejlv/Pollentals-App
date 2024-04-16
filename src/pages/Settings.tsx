function Switch() {
  return (
    <div className="relative h-6 w-12 rounded-full bg-lightGreen transition duration-200 ease-linear">
      <div className="absolute left-0 m-1 h-4 w-4 rounded-full bg-white shadow transition"></div>
    </div>
  );
}

export default function Settings() {
  return (
    <div className="0 flex min-h-screen items-center justify-center p-5">
      <div className="w-full max-w-sm rounded-lg  bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">Mine Allergier</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-lg">birk</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg">birk</span>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg">birk</span>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
}
