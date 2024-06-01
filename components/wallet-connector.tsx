"use client";
import { useConnectWallet, useWallets } from "@web3-onboard/react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const WalletConnector = () => {
  const connectedWallets = useWallets();
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    if (wallet || connectedWallets.length > 0) {
      setWalletConnected(true);
    } else {
      setWalletConnected(false);
    }
  }, [connectedWallets.length, wallet]);

  const connectWallet = async () => {
    try {
      await connect();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (wallet) await disconnect(wallet);
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    }
  };

  return (
    <Button disabled={connecting} className="py-8" onClick={connectWallet}>
      {walletConnected ? (
        "Swap"
      ) : !walletConnected && connecting ? (
        "Connecting..."
      ) : (
        <div className="flex items-center gap-2 stroke-none group-hover:fill-white fill-[#2530C6]">
          <span>Connect Wallet</span>
        </div>
      )}
    </Button>
  );
};

export default WalletConnector;
