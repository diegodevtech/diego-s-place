import NavigationListItem from "./NavigationListItem";
import MobileHomeMenu from "./MobileHomeMenu";
// import { auth } from "../_service/auth";
// import Image from "next/image";


export default async function Navigation() {
  // const session = await auth();


  return (
    <nav className="z-10 text-xl">
      <ul className="hidden sm:flex gap-16 items-center">
        <NavigationListItem href="/cabins">Cabins</NavigationListItem>
        <NavigationListItem href="/about">About</NavigationListItem>
        <NavigationListItem href="/account">Guest Area</NavigationListItem>
      </ul>
      <MobileHomeMenu/>
    </nav>
  );
}
