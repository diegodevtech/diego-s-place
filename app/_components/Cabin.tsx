import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import React from "react";
import Image from "next/image";
import { CabinType } from "../_types";
import TextExpander from "./TextExpander";

export default function Cabin({ cabin }: { cabin: CabinType }) {
  const { name, maxCapacity, image, description } =
    cabin;

  return (
    <div className="md:grid md:grid-cols-[3fr_4fr] md:gap-20 border border-primary-800 md:py-3 md:px-10 md:mb-24 mb-12 px-3">
      <div className="relative scale-[1.15] -translate-x-3 hidden md:block">
        <Image
          src={image ?? "/placeholder.png"}
          alt={`Cabin ${name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="md:hidden mb-4 relative scale-[1.04] mt-2">
        <Image
          src={image ?? "/placeholder.png"}
          alt={`Cabin ${name}`}
          width={700}
          height={100}
          className="object-cover"
        />
      </div>

      <div>
        <h3
          className="
        text-accent-100 font-black md:text-7xl mb-5 md:translate-x-[-254px] bg-primary-950 md:p-6 md:pb-1 md:w-[150%]
          text-4xl pt-4
        "
        >
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description ?? ""}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
