
const Footer = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-black text-white text-sm mt-24">
      {/*First Section */}
      <div className=" flex items-center px-8 py-6">
      <h1 className="w-full text-2xl tracking-wide items-center">Nous sommes toujours a la recherche de nouveaux partenaires!</h1>
      </div>
      {/*Second Section */}
      <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row justify-between gap-24">
        {/* Left*/}
        <div className="w-full md:1/2 lg:w-1/3 flex flex-col ">
          <h3 className="text-2xl tracking-wide">S3P Distribution Tunis</h3>
          <div className="flex flex-col gap-1">
            <span className="font-semibold block">E-mail:</span>
            <span className="font-semibold block">
              s3ptunis.contact@gmail.com
            </span>
            <span className="font-semibold block">Tel:</span>
            <span className="font-semibold block">+216 58 402 416</span>
            <span className="font-semibold block">Adresse:</span>
            <span className="font-semibold block">
              21 Cite ennour, 2080 Ariana, Tunisie
            </span>
          </div>
        </div>
        {/*Center */}
        <div className="w-full md:1/2 lg:w-1/3 flex flex-col ">
          <h3 className="text-2xl tracking-wide">S3P Distribution Sousse</h3>
          <div className="flex flex-col gap-1">
            <span className="font-semibold block">E-mail:</span>
            <span className="font-semibold block">s3p.contact@gnet.tn</span>
            <span className="font-semibold block">Tel:</span>
            <span className="font-semibold block">+216 58 306 649</span>
            <span className="font-semibold block">Adresse:</span>
            <span className="font-semibold block">
              9 Avenue de la Cite Olympique 4000 Sousse, Tunisie
            </span>
          </div>
        </div>
        {/*Right */}
        <div className="w-full md:1/2 lg:w-1/3 flex flex-col ">
          <h3 className="text-2xl tracking-wide">S3P Distribution Sfax</h3>
          <div className="flex flex-col gap-1">
            <span className="font-semibold block">E-mail:</span>
            <span className="font-semibold block">S3p.sfax@gnet.tn</span>
            <span className="font-semibold block">Tel:</span>
            <span className="font-semibold block">+216 56 114 500</span>
            <span className="font-semibold block">Adresse:</span>
            <span className="font-semibold block">
              Z.I Poudriere 1, Rue 13 Aout 5000 Sfax, Tunisie
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col py-12 gap-4 items-center">
          <h1 className="font-medium text-lg">Inscrivez-vous</h1>
          <p>Inscrivez-vous a notre Newsletter !</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Votre E-mail"
              className="p-4 w-3/4 text-black"
            />
            <button className="w-1/4 bg-lama text-white">Join</button>
          </div>
        </div>
      {/*Third Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">LOGO</div>
        <div className=""> facebook icon</div>
        <div className="">VORTRGDFGFGSG</div>
      </div>
    </div>
  );
}

export default Footer
