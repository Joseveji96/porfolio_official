import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {MdConnectWithoutContact, MdOutlineHome, MdRoundaboutRight } from "react-icons/md"


export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <MdOutlineHome/>,
    },
    {
      name: "About",
      link: "/about",
      icon: <MdRoundaboutRight />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <MdConnectWithoutContact />
      ),
    },
  ];
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
