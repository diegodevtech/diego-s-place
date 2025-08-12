"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import NavigationListItem from "./NavigationListItem";

export default function MobileHomeMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <React.Fragment>
      <button
        ref={buttonRef}
        className="bg-primary-950 rounded-md p-1 sm:hidden relative"
        onClick={toggleMenu}
      >
        <Bars3Icon width={32} height={32} />
      </button>
      <div
        ref={menuRef}
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
