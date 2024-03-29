export default function Partners() {
  return (
    <div className="bg-white py-20 sm:py-16">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-4xl uppercase mb-16">
          Our Partners
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <a
            href="https://amplifychange.org/about/ "
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src={require("../../img/partners/amplify.png")}
              alt="Amplify"
              width={158}
              height={48}
            />
          </a>
          <a
            href="https://www.younghealthprogrammeyhp.com/impact-fellowship.html "
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              src={require("../../img/partners/astra.png")}
              alt="Astra"
              width={158}
              height={48}
            />
          </a>
          <a
            href="https://codingbeautydev.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src={require("../../img/partners/iidea.png")}
              alt="Iidea"
              width={158}
              height={48}
            />
          </a>
          <a
            href="https://www.makeinroads.org/making-inroads "
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={require("../../img/partners/inroad.png")}
              alt="Inroad"
              width={158}
              height={48}
            />
          </a>
        </div>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <a href="https://spidercenter.org/ " target="_blank" rel="noreferrer">
            <img
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
              src={require("../../img/partners/Screenshot 2023-06-26 at 4.32.53 PM.png")}
              alt="Spider"
              width={158}
              height={48}
            />
          </a>
          <a
            href="https://www.sickkidsfoundation.com/ "
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={require("../../img/partners/sickkid.png")}
              alt="Sickkid"
              width={158}
              height={48}
            />
          </a>
          <a
            href="https://www.eac.int/education/17-basic-page/498-780-462-call-for-applications-incubator-for-integration-and-development-in-east-africa-iidea"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src={require("../../img/partners/step.png")}
              alt="Step"
              width={158}
              height={48}
            />
          </a>
          <a href="https://womendeliver.org/ " target="_blank" rel="noreferrer">
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={require("../../img/partners/women.png")}
              alt="Women"
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
