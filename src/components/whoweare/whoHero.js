import { useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function WhoHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-24">
        <div className="hidden mt-12 sm:mb-8 sm:flex sm:justify-center">
          {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Donate to the cause.{" "}
            <a href="/donate" className="font-semibold text-teal-500">
              <span className="absolute inset-0" aria-hidden="true" />
              Donate <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl uppercase">
            Model & approach
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-bold">
            Access to accurate information and guidance is crucial for
            individuals and organizations working to design and implement
            effective social and development programs. Having access to relevant
            data can help stakeholders make informed decisions, identify areas
            of need, and design interventions that are more likely to have a
            positive impact.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-bold">
            Rwanda Youth Voice for Change has adopted a community model and
            human-centered approach as a way to address common health issues by
            engaging and empowering our beneficiaries and local communities to
            take an active role in promoting health and wellbeing. Our approach
            recognizes that communities are the experts in their own health
            needs and can be valuable partners in designing and implementing
            interventions that are tailored to their unique needs and contexts.
          </p>
          {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
            
        </div>
      </div>
    </div>
  );
}
