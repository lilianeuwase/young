let jeanpaul = require("../../../img/team/Jean Paul Ndayizeye.JPG");
let gabriel = require("../../../img/team/gabriel.png");
let deo = require("../../../img/team/Deogratias.png");
let desire = require("../../../img/team/lili.jpg");
let chris = require("../../../img/team/lili.jpg");
let gisele = require("../../../img/team/Gisele Iyakaremye.jpg");
let diane = require("../../../img/team/Diane_I-removebg-preview.png");
let liliane = require("../../../img/team/lili.jpg");

const exec = [
  {
    name: "Dr. Jean Paul Ndayizeye",
    role: "CEO",
    imageUrl:
    jeanpaul,
  },
  {
    name: "Dr. Gabriel Makiriro",
    role: "Director of Programs",
    imageUrl:
      gabriel,
  },
];

const board = [
  {
    name: "Dr. Deogratias Kaneza",
    role: "Chair",
    imageUrl:
    deo,
  },
  // {
  //   name: "Dr. Desire Habonimana",
  //   role: "Secretary ",
  //   imageUrl:
  //     desire,
  // },
  // {
  //   name: "Dr. Christian Mazimpaka",
  //   role: "Member ",
  //   imageUrl:
  //     chris,
  // },
];

const staff = [
  {
    name: "Gisele Iyakaremye",
    role: "",
    imageUrl:
    gisele,
  },
  // {
  //   name: "Diane Izabayo",
  //   role: "",
  //   imageUrl:
  //     diane,
  // },
  {
    name: "Liliane Uwase",
    role: "IT & Communications Manager",
    imageUrl:
      liliane,
  },
];



export default function MeetTheTeam() {
  return (
    <div className="bg-white py-24 sm:py-52">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          {/* <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl uppercase text-center">
          Key member of the executive committee
          </h2> */}
          <p className="mt-6 text-lg leading-8 uppercase text-center font-bold">
          Key member of the executive committee
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {exec.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-40 w-40"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-teal-500">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="max-w-2xl mt-8">
          {/* <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl uppercase text-center">
          Key member of the executive committee
          </h2> */}
          <p className="mt-6 text-lg leading-8 uppercase text-center font-bold">
          Board of Directors
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 mt-8"
        >
          {board.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-40 w-40"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-teal-500">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="max-w-2xl mt-8">
          {/* <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl uppercase text-center">
          Key member of the executive committee
          </h2> */}
          <p className="mt-6 text-lg leading-8 uppercase text-center font-bold">
          Key Staff
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 mt-8"
        >
          {staff.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-40 w-40"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-teal-500">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
