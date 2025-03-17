import { useState } from "react";
import type { Route } from "./+types/simulator";

import BuildingLayout from "~/components/buildingLayout";
import LocationOfYardDoor from "~/components/locationOfYardDoor";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Asta Kosali Kosali" }];
}

export default function Simulator() {
  const [menu, setMenu] = useState(1);

  const handleMenu = (menu: number) => setMenu(menu);

  return (
    <div className="bg-light">
      <nav className="bg-bgLight p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="logo.png" alt="Logo" className="h-8" />
            <h1 className="text-primary font-semibold text-lg">
              Asta Kosala Kosali
            </h1>
          </div>
          <ul className="flex gap-6 text-primary">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="bg-secondary text-white py-2 px-4 rounded">
              Login
            </button>
            <button className="bg-primary text-white py-2 px-4 rounded">
              Register
            </button>
          </div>
        </div>
      </nav>

      <div>
        <div className="text-center mb-6">
          <img src="logo.png" alt="Logo" className="mx-auto h-12 mb-4" />
          <h2 className="text-primary font-semibold text-2xl">
            Asta Kosala Kosali
          </h2>
          <p className="text-gray-600">Bali Building Simulator</p>
        </div>
        <div className="flex justify-center gap-3 mt-5 w-full">
          <div
            onClick={() => handleMenu(2)}
            className={`bg-primary py-[20px] px-[30px] md:py-[15px] md:px-[40px] my-10 md:my-5 rounded-[5px] cursor-pointer ${
              menu === 2 && "bg-secondary"
            }`}
          >
            <p className="text-white text-center text-[14px] md:text-[16px] font-display">
              Location of Yard Door
            </p>
          </div>
          <div
            onClick={() => handleMenu(3)}
            className={`bg-primary py-[20px] px-[30px] md:py-[15px] md:px-[40px] my-10 md:my-5 rounded-[5px] cursor-pointer ${
              menu === 3 && "bg-secondary"
            }`}
          >
            <p className="text-white text-center text-[14px] md:text-[16px] font-display">
              Building Layout
            </p>
          </div>
        </div>
        {menu === 2 && <LocationOfYardDoor />}
        {menu === 3 && <BuildingLayout />}
      </div>
    </div>
  );
}
