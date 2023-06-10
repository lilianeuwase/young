import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import "./nav.css";
// import nav data
import { NavLink } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="link hover:border-b-2 hover:border-dark transition duration-300 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-3 text-gray-900 shadow-sm hover:bg-teal-50 ">
          WHO WE ARE
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-bold">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/whoweare"
                  className={classNames(
                    active ? "bg-teal-50 text-teal-700" : "text-gray-700",
                    "block px-4 pt-2 text-sm"
                  )}
                >
                  OUR APPROACH
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/meettheteam"
                  className={classNames(
                    active ? "bg-teal-50 text-gray-900" : "text-gray-700",
                    "block px-4 pb-2 text-sm"
                  )}
                >
                  OUR TEAM
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/partners"
                  className={classNames(
                    active ? "bg-teal-50 text-gray-900" : "text-gray-700",
                    "block px-4 pb-2 text-sm"
                  )}
                >
                  OUR PARTNERS
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
