"use client";

import Link from "next/link";
import { useState } from "react";
import { PiList } from "react-icons/pi";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <PiList
        className="cursor-pointer text-3xl"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Accueil</Link>
          <Link href="/">Nos Bijoux</Link>
          <Link href="/">À Propos</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Panier</Link>
          <Link href="/">Se Déconnecter</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
