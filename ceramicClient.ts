import { CeramicClient } from "@ceramicnetwork/http-client";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { ethers } from "ethers";

let ceramicInstance: CeramicClient | null = null;

export const getCeramicInstance = async (): Promise<CeramicClient> => {
  if (ceramicInstance) {
    return ceramicInstance;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const didProvider = new Ed25519Provider(signer);

  ceramicInstance = new CeramicClient("https://ceramic-node.base.hostname");
  ceramicInstance.did = didProvider;

  return ceramicInstance;
};
