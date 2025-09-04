import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";

const features = [
  {
    name: "Store your PDFs",
    description:
      "Easily upload and store your PDFs for quick access and retrieval.",
    icon: GlobeIcon,
  },
  {
    name: "Interactive pdf chat",
    description:
      "Easily upload and store your PDFs for quick access and retrieval.",
    icon: EyeIcon,
  },
  {
    name: "Quick interaction",
    description:
      "Easily upload and store your PDFs for quick access and retrieval.",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive interaction",
    description:
      "Easily upload and store your PDFs for quick access and retrieval.",
    icon: MonitorSmartphoneIcon,
  },
];

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="text-base font-semibold leading-7 text-indigo-600">
              Your interaction document
            </h1>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transform yout PDFS into into interactive conversations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF</span>
              <br />
              <br />
              Upload your documents and start a conversation with them.
              <span className="text-indigo-600">Chat with AI</span> to get
              instant answers and insights from your files{" "}
              <span className="font-bold">dynamic conversations</span> Solving
              any issues you have with your documents.
            </p>
          </div>
          <Button asChild className="my-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              src="https://i.imgur.com/VciRSTI.jpeg"
              alt="Chat with PDF"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative" />
            <div className="absolute bottom-2 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"></div>
          </div>
          </div>
          <div className="">
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon 
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    <p className="text-lg font-semibold leading-8 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
        </div>
      </div>
    </main>
  );
}
