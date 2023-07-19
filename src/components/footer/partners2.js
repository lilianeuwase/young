export default function Partners2() {
  return (
    <div className="bg-white py-20 sm:py-16">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-4xl uppercase mb-16">
          Our Partners
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <a href="https://www.ebu.ch/home" target="_blank" rel="noreferrer">
            <img
              className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={require("../../img/partners/EBU Logo.jpeg")}
              alt="EBU"
              width={158}
              height={48}
            />
          </a>
          <a
            href="https://www.mtvstayingalive.org/ "
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={require("../../img/partners/mtv.png")}
              alt="MTV"
              width={158}
              height={48}
            />
          </a>
        </div>
      </div>
      <hr
        className="mt-16"
        style={{
          background: "gray",
          color: "gray",
          borderColor: "gray",
          height: "3px",
        }}
      />
    </div>
  );
}
