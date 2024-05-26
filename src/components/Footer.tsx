import Link from "next/link";
import {
  PiWhatsappLogo,
  PiInstagramLogo,
  PiEnvelopeSimple,
} from "react-icons/pi";
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white text-sm font-light h-max mt-24 mx-auto max-w-[2048px] pt-16 pb-8 px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="flex flex-col md:flex-row gap-12 md:gap-2 justify-between border-b border-gray-100 pb-16">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="text-2xl font-bold">
            OSHUN
          </Link>
          <div className="flex gap-2">
            <a href="/">
              <PiWhatsappLogo className="text-3xl" />
            </a>
            <a href="/">
              <PiInstagramLogo className="text-3xl" />
            </a>
          </div>
          <span className="flex items-center gap-2">
            <PiEnvelopeSimple className="text-2xl" /> oshun.jewelry@gmail.com
          </span>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 hover-underline">
          <h3 className="font-semibold uppercase">Nous Visiter</h3>
          <div className="flex flex-col items-center md:items-start gap-4 hover-underline justify-center">
            <Link href="/">Accueil</Link>
            <Link href="/">Nos Bijoux</Link>
            <Link href="/">À Propos</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-8">
          <h3 className="font-semibold uppercase">Légal</h3>
          <div className="flex flex-col items-center md:items-start gap-4 hover-underline justify-center">
            <Link href="/">Conditions Générales de Vente</Link>
            <Link href="/">Politique de Confidentialité</Link>
            <Link href="/">Paramètres des Cookies</Link>
            <Link href="/">Mentions Légales</Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-8">
          <h3 className="font-semibold uppercase">Paiements Sécurisés</h3>
          <div className="flex items-center md:items-start gap-8">
            <FaCcPaypal className="text-4xl text-white" />
            <FaCcMastercard className="text-4xl text-white" />
            <FaCcVisa className="text-4xl text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-8">
        <div className="flex flex-col  md:flex-row items-center md:justify-between gap-2">
          <div className="">
            © 2024 <span className="font-semibold">OSHUN JEWELRY</span>{" "}
          </div>
          <div className="">
            Développé par{" "}
            <a
              href="https://dylann-dev.com/"
              target="blank"
              className="underline underline-offset-4 hover:text-yellow-500"
            >
              Dylann Xavero
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
