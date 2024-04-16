interface CardProps {
  title: string;
  value: string;
  unit: "p/m³";
  imageUrl: string;
}

export default function Card({ title, value, unit, imageUrl }: CardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center">
        <img
          src={imageUrl}
          alt={title}
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>
      <div className="text-center">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-sm font-medium">{unit}</div>
      </div>
    </div>
  );
}
