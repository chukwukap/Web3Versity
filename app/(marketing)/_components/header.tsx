import { Button } from "@/components/ui/button";
import WalletConnector from "@/components/wallet-connector";
import { MountainIcon } from "lucide-react";
import React from "react";

function MarketingHeader() {
  return (
    <header className="bg-gray-900 py-4 text-gray-50 bg-white/30  sticky  top-0 left-0 backdrop-blur-lg rounded-lg p-6 shadow-lg ">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6 text-gray-400" />
          <span className="text-lg font-semibold">Web3 Academy</span>
        </div>
        <WalletConnector />
      </div>
    </header>
  );
}

export default MarketingHeader;
