import { Button } from "@/components/ui/button";
import Link from "next/link";
import MarketingHeader from "./_components/header";
import MarketingFooter from "./_components/footer";

const d = {
  "neon-glow": ["#8A2BE2", "#9370DB", "#BA55D3", "#DA70D6", "#EE82EE"],
  cyberpunk: ["#0F2027", "#203A43", "#2C5364"],
  mystic: ["#5B3A75", "#7B5BA3", "#9C7BD1", "#C69BFF"],
  blockchain: ["#1E3C72", "#2A5298", "#3668C4", "#4B86E6"],
  metaverse: ["#6B46C1", "#8E54E9", "#BB86FC", "#E9A8FF"],
};
export default async function LandingPage() {
  return (
    <>
      <MarketingHeader />
      <main className=" mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24 ">
        <div className="grid container gap-8 lg:grid-cols-2 xl:gap-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Unlock the Future of Web3
            </h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
              Dive into the world of blockchain, dApps, smart contracts, and
              cryptocurrencies with our comprehensive Web3 course catalog.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="outline"
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
              >
                <Link href={"/catalogue"}>Explore Courses</Link>
              </Button>
              <Button variant="secondary">Get Started</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm midnight-fade  midnight-fade">
              <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                <BitcoinIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Blockchain Fundamentals
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Learn the core concepts of blockchain technology and how it
                works.
              </p>
              <Link
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-950 dark:text-gray-50 dark:hover:text-gray-100"
                href="#"
              >
                Explore Course
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm midnight-fade  midnight-fade">
              <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                <CodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">dApp Development</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Build decentralized applications (dApps) on top of blockchain
                networks.
              </p>
              <Link
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-950 dark:text-gray-50 dark:hover:text-gray-100"
                href="#"
              >
                Explore Course
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm midnight-fade  midnight-fade">
              <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                <CoinsIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Cryptocurrencies</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Explore the world of cryptocurrencies, their underlying
                technologies, and use cases.
              </p>
              <Link
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-950 dark:text-gray-50 dark:hover:text-gray-100"
                href="#"
              >
                Explore Course
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm midnight-fade  midnight-fade">
              <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                <ConstructionIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Smart Contracts</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Learn how to design, deploy, and interact with smart contracts
                on blockchain networks.
              </p>
              <Link
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-950 dark:text-gray-50 dark:hover:text-gray-100     "
                href="#"
              >
                Explore Course
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <section className="bg- py-12 md:py-16 lg:py-24 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 xl:gap-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  midnight-fade midnight-fade">
                <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                  <QuoteIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  Interactive Quizzes
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Test your knowledge with engaging quizzes throughout the
                  courses.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  midnight-fade midnight-fade">
                <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                  <CodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  Coding Challenges
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Sharpen your skills with hands-on coding challenges and
                  projects.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  midnight-fade midnight-fade">
                <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                  <GamepadIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  Gamified Learning
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Enjoy a gamified learning experience with progress tracking
                  and rewards.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  midnight-fade midnight-fade">
                <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                  <ProjectorIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  Hands-on Projects
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Apply your knowledge through practical, real-world projects.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Engaging Learning Experiences
              </h2>
              <p className="mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                Our Web3 courses are designed to be interactive and practical,
                featuring quizzes, coding challenges, hands-on projects, and
                gamified elements to keep you engaged and learning.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button variant="outline">
                  <Link href={"/catalogue"}>Explore Courses</Link>
                </Button>
                <Button variant="secondary">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 xl:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Comprehensive Curriculum
            </h2>
            <p className="mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
              Our Web3 course catalog covers a wide range of topics, from the
              fundamentals of blockchain technology to advanced concepts in
              decentralized applications and smart contracts.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button variant="outline">
                <Link href={"/catalogue"}>Explore Courses</Link>
              </Button>
              <Button variant="secondary">Get Started</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  midnight-fade ">
              <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                <BitcoinIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Blockchain Fundamentals
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Understand the core concepts of blockchain technology, including
                consensus mechanisms, decentralization, and cryptography.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  midnight-fade ">
              <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                <CodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">dApp Development</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Learn how to build decentralized applications (dApps) on top of
                blockchain networks, including Ethereum, Solana, and Polkadot.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  midnight-fade ">
              <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                <CoinsIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Cryptocurrencies</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Explore the world of cryptocurrencies, including Bitcoin,
                Ethereum, and other popular digital assets, and understand their
                underlying technologies and use cases.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  midnight-fade ">
              <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                <ConstructionIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Smart Contracts</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Dive into the world of smart contracts, learning how to design,
                deploy, and interact with them on various blockchain platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BitcoinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CoinsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

function ConstructionIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  );
}

function GamepadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ProjectorIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7 3 5" />
      <path d="M9 6V3" />
      <path d="m13 7 2-2" />
      <circle cx="9" cy="13" r="3" />
      <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
      <path d="M16 16h2" />
    </svg>
  );
}

function QuoteIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}
