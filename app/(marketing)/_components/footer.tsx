import { MountainIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function MarketingFooter() {
  return (
    <footer className="bg-gray-900 py-8 text-gray-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6 text-gray-400" />
            <span className="text-lg font-semibold text-gray-50">
              Web3 Academy
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link className="hover:text-gray-50" href="#">
              Home
            </Link>
            <Link className="hover:text-gray-50" href="#">
              Courses
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default MarketingFooter;
