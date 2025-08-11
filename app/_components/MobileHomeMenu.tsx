"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import NavigationListItem from "./NavigationListItem";

export default function MobileHomeMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <React.Fragment>
      <button
        className="bg-primary-950 rounded-md p-1 sm:hidden relative"
        onClick={toggleMenu}
      >
        <Bars3Icon width={32} height={32} />
      </button>
      <div
        className={`absolute right-4 h-fit w-fit bg-primary-950 rounded-md text-accent-500 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="p-2 flex flex-col gap-4 text-right">
          <NavigationListItem href="/cabins">Cabins</NavigationListItem>
          <NavigationListItem href="/about">About</NavigationListItem>
          <NavigationListItem href="/account">Guest Area</NavigationListItem>
        </ul>
      </div>
    </React.Fragment>
  );
}
