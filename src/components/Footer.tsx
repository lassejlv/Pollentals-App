import { FaHome, FaMap } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export default function Footer() {
  const links = [
    {
      icon: <FaHome className="text-2xl" />,
      path: "/",
    },
    {
      icon: <FaMap className="text-2xl" />,
      path: "/map",
    },
    {
      icon: <FaGear className="text-2xl" />,
      path: "/settings",
    },
  ];

  return (
    <>
      <div className="absolute bottom-0 w-full bg-lightGreen p-4 text-center text-white">
        <div className="flex items-center justify-between px-10">
          {links.map((link, index) => (
            <span
              key={index}
              onClick={() => window.location.replace(link.path)}
            >
              {link.icon}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
