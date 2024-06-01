import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";

const injected = injectedModule();
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;

const chains = [
  {
    id: "0x1", // Ethereum Mainnet
    token: "ETH",
    label: "Ethereum Mainnet",
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
  },
  {
    id: "0x11155111", // Sepolia Chain ID
    token: "SEP", // Sepolia native token
    label: "Sepolia Testnet",
    rpcUrl: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
  },
];
const WalletConnectProjectId = process.env.WC_PROJECT_ID!;

const walletConnect = walletConnectModule({
  projectId: "c0ed27a5c950e2c1fca401d5e5ce7356",
});

const trezorOptions = {
  email: "test@test.com",
  appUrl: "https://www.blocknative.com",
};

const onboard = init({
  wallets: [injected, walletConnect],

  chains: chains,
  appMetadata: {
    name: "Bull Swap",
    icon: "/logo.svg",

    description: "Swap tokens with ease!",
    gettingStartedGuide: "http://mydapp.io/getting-started",
    explore: "http://mydapp.io/about",
    recommendedInjectedWallets: [
      {
        name: "MetaMask",
        url: "https://metamask.io",
      },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
    agreement: {
      version: "1.0.0",
      termsUrl: "https://www.blocknative.com/terms-conditions",
      privacyUrl: "https://www.blocknative.com/privacy-policy",
    },
  },
});

export default onboard;
