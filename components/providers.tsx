"use client";
import { Web3OnboardProvider } from "@web3-onboard/react";
import React from "react";

import onboard from "@/web3-onboard.config";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Web3OnboardProvider web3Onboard={onboard}>{children}</Web3OnboardProvider>
  );
}

export default Providers;
