
import injectedModule from '@subwallet_connect/injected-wallets'
import { init } from '@subwallet_connect/react'
import walletConnectModule from '@subwallet_connect/walletconnect'
import coinBaseModule from "@subwallet_connect/coinbase"
import cedeStoreWalletModule from '@subwallet_connect/cede-store'
import keepkeyModule from '@subwallet_connect/keepkey'
import ledgerModule from '@subwallet_connect/ledger'
import ledgerPolkadot from "@subwallet_connect/ledgerpolkadot";
import blocktoModule from  "@subwallet_connect/blocto"
import phantomModule from '@subwallet_connect/phantom'
import tallyHoModule from '@subwallet_connect/tallyho'
import metamaskSDK from '@subwallet_connect/metamask'
import infinityWalletModule from '@subwallet_connect/infinity-wallet'
import trustModule from '@subwallet_connect/trust'
import sequenceModule from '@subwallet_connect/sequence'
import {TransactionHandlerReturn} from "@subwallet_connect/core/dist/types";


// Example key • Replace with your infura key
const INFURA_KEY = '302750fdd8644da3b50aa6daa0b89336'

const cedeStore = cedeStoreWalletModule();
const ledger = ledgerModule({ projectId : '16c6ad72b95e09bfdddfde13bf7f90b4',   walletConnectVersion: 2 })
const keepkey = keepkeyModule()
const ledgerPolkadot_ = ledgerPolkadot();
const coinBase = coinBaseModule()
const blocto = blocktoModule()
const injected = injectedModule({
  custom: [
    // include custom injected wallet modules here
  ],
  filter: {
    // mapping of wallet labels to filter here
  }
})
const phantom = phantomModule()
const walletConnect = walletConnectModule({
  projectId: '1a159ea1c91a73bdc7e69e971c3e824e',
  dappUrl: 'https://www.onboard.blocknative.com'
})
const metamaskSDKWallet = metamaskSDK({
  options: {
    extensionOnly: false,
    i18nOptions: {
      enabled: true
    },
    infuraAPIKey : INFURA_KEY,
    dappMetadata: {
      name: 'Demo Web3Onboard'
    }
  }
})
const trust = trustModule()
const tallyho = tallyHoModule()
const infinityWallet = infinityWalletModule()
const sequence = sequenceModule({
  appName: 'My app'
})



export default init({
  connect : {
    autoConnectLastWallet : true,
    autoConnectAllPreviousWallet : true
  },
  projectId : '16c6ad72b95e09bfdddfde13bf7f90b4',

  url : 'https://thiendekaco.github.io/SubConnect/',

  chainsPolkadot:[
    {
      // hex encoded string, eg '0x1' for Ethereum Mainnet
      id: '91b171bb158e2d3848fa23a9f1c25182',
      // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
      namespace: 'substrate',
      // the native token symbol, eg ETH, BNB, MATIC
      token: 'DOT',
      // used for display, eg Polkadot
      label: 'Polkadot',
      // used for get balance
      rpcUrl: `polkadot.api.subscan.io`,
      decimal: 10
    },

    {
      id: 'afdc188f45c71dacbaa0b62e16a91f72' ,
      token: 'HDX',
      namespace: 'substrate',
      label: 'Hydradx',
      rpcUrl: 'hydradx.api.subscan.io',
      decimal : 12
    },
    {
      id: '9eb76c5184c4ab8679d2d5d819fdf90b',
      token: 'ASTR',
      label: 'Astar Network',
      decimal: 18,
      namespace: 'substrate',
      rpcUrl: 'astar.api.subscan.io'
    }

  ],

  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [
    metamaskSDKWallet,
    trust,
    infinityWallet,
    tallyho,
    injected,
    walletConnect,
    cedeStore,
    ledger,
    keepkey,
    sequence,
    ledgerPolkadot_,
    blocto,
    coinBase,
    phantom
  ],
  // An array of Chains that your app supports
  chains: [
    {
      // hex encoded string, eg '0x1' for Ethereum Mainnet
      id: '0x1',
      // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
      namespace: 'evm',
      // the native token symbol, eg ETH, BNB, MATIC
      token: 'ETH',
      // used for display, eg Ethereum Mainnet
      label: 'Ethereum Mainnet',
      // used for network requests
      rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`
    },
    {
      id: '0x504',
      rpcUrl: 'https://rpc.api.moonbeam.network',
      label: 'Moonbeam',
      token: 'GLMR',
      namespace : 'evm'
    },
    {
      id: '0x505',
      rpcUrl: 'https://rpc.api.moonriver.moonbeam.network',
      label: 'Moonriver',
      namespace: 'evm',
      token : 'MOVR'
    },
    {
      id: '0x507',
      rpcUrl: 'https://rpc.api.moonbase.moonbeam.network',
      label: 'MoonbaseAlpha',
      token:  'DEV',
      namespace : 'evm'
    },
    {
      id: '0x250',
      rpcUrl: 'https://astar.public.blastapi.io',
      label: 'Astar',
      namespace : 'evm',
      token:  'ASTR',
    },
    {
      id: '0x150', // 336
      rpcUrl: 'https://shiden.public.blastapi.io',
      label: 'Shiden',
      token: 'SDN',
      namespace : 'evm'
    },
    {
      id: '0x51',
      rpcUrl: 'https://evm.shibuya.astar.network',
      label: 'Shibuya Testnet',
      token:  'SBY',
      namespace : 'evm'
    },
    {
      id: '0x13881',
      rpcUrl: 'https://endpoints.omniatech.io/v1/matic/mumbai/public',
      label: 'Mumbai',
      token: 'MATIC',
      namespace : 'evm'
    },
    {
      id: 288,
      rpcUrl: 'https://endpoints.omniatech.io/v1/matic/mumbai/public',
      label: 'Boba Testnet',
      token: 'BOBA',
      namespace: 'evm'
    }

  ],
  appMetadata: {
    // The name of your dApp
    name: 'SubWallet Connect',
    // SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
    icon: '<svg width="283" height="64" viewBox="0 0 283 64" fill="none" \n' +
        '    xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/>\n' +
        '</svg>',
    // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
    logo: '<svg width="283" height="64" viewBox="0 0 283 64" fill="none" \n' +
        '    xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/>\n' +
        '</svg>',
    // The description of your app
    description: 'Demo app for SubWalletConnect V2',
    // The url to a getting started guide for app
    gettingStartedGuide: 'http://mydapp.io/getting-started',
    // url that points to more information about app
    explore: 'http://mydapp.io/about',
    // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
    recommendedInjectedWallets: [
      {
        // display name
        name: 'MetaMask',
        // link to download wallet
        url: 'https://metamask.io'
      },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    ],
    // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://www.blocknative.com/terms-conditions',
      privacyUrl: 'https://www.blocknative.com/privacy-policy'
    }
  },
  notify: {
    desktop: {
      enabled: true,
      transactionHandler: (transaction) :TransactionHandlerReturn => {
        console.log({ transaction })
        if (transaction.eventCode === 'txConfirmed') {
          return {
            autoDismiss: 0
          }
        }
        // if (transaction.eventCode === 'txPool') {
        //   return {
        //     type: 'hint',
        //     message: 'Your in the pool, hope you brought a towel!',
        //     autoDismiss: 0,
        //     link: `https://goerli.etherscan.io/tx/${transaction.hash}`
        //   }
        // }
      },
      position: 'topLeft'
    }
  }
})
