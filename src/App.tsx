import Card from "./components/Card";

export default function App() {
  return (
    <main className="container mx-auto pt-5">
      <div className="grid grid-cols-1 space-y-8">
        <Card
          title="Birk"
          value="5"
          unit="p/m³"
          imageUrl="https://i.ibb.co/MZdTTCQ/image.png"
        />
        <Card
          title="Birk"
          value="5"
          unit="p/m³"
          imageUrl="https://i.ibb.co/MZdTTCQ/image.png"
        />
        <Card
          title="Birk"
          value="5"
          unit="p/m³"
          imageUrl="https://i.ibb.co/MZdTTCQ/image.png"
        />
      </div>
    </main>
  );
}
