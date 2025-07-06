"use client";
import { cn } from "@/lib/utils";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PlayCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";

const products = [
  {
    name: "Book a Stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a Flight",
    description: "Speak directly to your customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our Support Team",
    description: "Your Customer's data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];
const callsToAction = [
  { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
  { name: "Contact Support", href: "#", icon: PhoneIcon },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#84a98c] h-20">
      <nav
        className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8 h-full"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">
              <h2>Bookit</h2>
            </span>
            <img className="h-37 w-auto" src="Bookit.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center jsutify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className=" hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-[#2f3e46]">
              Stays
              <ChevronDownIcon
                className="h-5 flex-none text-[#2f3e46]"
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-o"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-[#cad2c5] -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 ">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#84a98c]"
                    >
                      <div className="">
                        <item.icon
                          className="h-6 w-6 text-[#2f3e46] group-hover:text-[#2f3e46]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#2f3e46]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-[#2f3e46]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between p-3 divide-x divide-gray-900/5 bg-[#cad2c5]">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center 
                                        rounded-lg justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#2f3e46] hover:bg-[#84a98c]"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-[#2f3e46]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-[#2f3e46]"
          >
            Flights
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-[#2f3e46]"
          >
            Car Rentals
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-[#2f3e46]"
          >
            Attractions
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-[#2f3e46]"
          >
            Flight + Hotel
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-[#2f3e46]"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10">
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#84a98c] px-6  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between pt-2 pb-2">
              <a href="#" className="-m-2 -ml-1.5 p-1.5">
                <span className="sr-only">Bookit</span>
                <img src="Bookit.png" className="h-30 w-auto" alt="" />
              </a>
              <button
                type="button"
                className="-mt-2 -mr-2  rounded-md p-2 text-[#2f3e46] ml-auto"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#2f3e46] hover:bg-[#cad2c5]">
                          Stays
                          <ChevronDownIcon
                            className={cn(
                              open ? "rotate-100" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>

                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#2f3e46] hover:bg-[#cad2c5]"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#2f3e46] hover:bg-[#cad2c5]"
                  >
                    Flights
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#2f3e46] hover:bg-[#cad2c5]"
                  >
                    Car Rentals
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#2f3e46] hover:bg-[#cad2c5]"
                  >
                    Attractions
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#2f3e46] hover:bg-[#cad2c5]"
                  >
                    Flight + Hotel
                  </a>
                </div>
                <div className="py-6">
                  <a href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#2f3e46] hover:bg-[#cad2c5]"
                  >   
                    Log In

                  </a>

                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}

export default Header;
