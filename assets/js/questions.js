/* jshint esversion: 8 */

// creating an array and passing the number, questions, options, and answers
let questions = [{

    questionID: 1,
    question: "How much has Bitcoin's value grown since it started?",
    answer: "1000%",

    ans1: "150%",
    ans2: "500%",
    ans3: "1000%",
    ans4: "850%"
  },
  {
    questionID: 2,
    question: "What is a smart contract?",
    answer: "Programs stored on a blockchain that run when predetermined conditions are met",

    ans1: "A computer protocol that runs 24/7 without breakdowns",
    ans2: "Programs stored on a blockchain that run when predetermined conditions are met",
    ans3: "A cloud-based contract stored on a public blockchain",
    ans4: "Artificial intelligence assisted contract which run when conditions are met",


  },
  {
    questionID: 3,
    question: "Who invented Bitcoin?",
    answer: "Satoshi Nakamoto",

    ans1: "The U.S Government",
    ans2: "Satoshi Nakamoto",
    ans3: "A group of hackers",
    ans4: "Steve Jobs",

  },
  {
    questionID: 4,
    question: "What is a Private Key?",
    answer: "The ability to access the Blockchain",

    ans1: "The password to your account",
    ans2: "Performing a transaction anonymously",
    ans3: "The secret number that generates your public address",
    ans4: "The ability to access the Blockchain"

  },
  {
    questionID: 5,
    question: "What is a Bitcoin Block?",
    answer: "A Bitcoin transaction",

    ans1: "A Bitcoin transaction",
    ans2: "All the Bitcoin transactions",
    ans3: "A virtual brick used in Minecraft",
    ans4: "A set of Bitcoin transactions"

  },
  {
    questionID: 6,
    question: "What is cold storage?",
    answer: "Storing your private key offline not connected to the internet",

    ans1: "Switching your phone off as you make a transaction",
    ans2: "When you store you wallet in a cold room",
    ans3: "Cooling your mining equipment with extra fans to stop over heating",
    ans4: "Storing your private key offline not connected to the internet"
  },
  {
    questionID: 7,
    question: "What is a Blockchain?",
    answer: "A set of blocks containing transactions",

    ans1: "A centralised database that stores transactions",
    ans2: "The Bitcoin software protocol",
    ans3: "A set of blocks containing transactions",
    ans4: "A set of transactions"
  },
  {
    questionID: 8,
    question: "How many Bitcoins will ever be mined?",
    answer: "21 Million",

    ans1: "21 Million",
    ans2: "20 Million",
    ans3: "21 Billion",
    ans4: "20 Billion"
  },
  {
    questionID: 9,
    question: "What is Proof of Work?",
    answer: "The competition between miners to find the correct hash",

    ans1: "A way of proving that Bitcoins have been sent and received from your wallet",
    ans2: "The competition between miners to find the correct hash",
    ans3: "A tool used in mining to generate the next transaction",
    ans4: "The competition between miners to not fully disclose transactions"
  },
  {
    questionID: 10,
    question: "What is an advantage of Bitcoin?",
    answer: "The total money supply is pre-determined",

    ans1: "It's the fastest cryptocurrency there is",
    ans2: "You can deposit it in a bank account",
    ans3: "The total money supply is pre-determined",
    ans4: "It's in-built Inflation"
  },
  {
    questionID: 11,
    question: "What is the second largest cryptocurrency?",
    answer: "Ethereum",

    ans1: "Ethereum",
    ans2: "Cardano",
    ans3: "Ripple",
    ans4: "Dodge"
  },
  {
    questionID: 12,
    question: "What is Proof of Stake?",
    answer: "A type of consensus mechanism used to validate cryptocurrency transactions",

    ans1: "A type of consensus mechanism used to validate cryptocurrency transactions",
    ans2: "A way to purchase new coins for your wallet",
    ans3: "A way of generating new blocks buy burning old blocks",
    ans4: "A type of consensus mechanism used to mine new cryptocurrency transactions"

  },
  {
    questionID: 13,
    question: "How long is a Bitcoin Block?",
    answer: "10 Minutes",

    ans1: "660 Seconds",
    ans2: "10 Minutes",
    ans3: "As long as a piece of string",
    ans4: "1 Hour"

  },
  {
    questionID: 14,
    question: "When was the Bitcoin software first released?",
    answer: "2012",

    ans1: "2002",
    ans2: "2009",
    ans3: "2012",
    ans4: "2020"

  },
  {
    questionID: 15,
    question: "What is Ether’s connection to Ethereum?",
    answer: "Ether is a cryptocurrency, Ethereum is a blockchain platform",

    ans1: "They are just different names for the same cryptocurrency",
    ans2: "Ether is a cryptocurrency, Ethereum is a blockchain platform",
    ans3: "Ethereum is a cryptocurrency, Ether is a blockchain platform",
    ans4: "Ether is a more expensive coin than Ethereum"

  },
  {
    questionID: 16,
    question: "Which of these cryptocurrencies is the oldest?",
    answer: "Dogecoin",

    ans1: "Ether",
    ans2: "Tether",
    ans3: "Dogecoin",
    ans4: "Cardano"

  },
  {
    questionID: 17,
    question: "What is a CBDC?",
    answer: "A digital currency issued by a central bank",

    ans1: "A way of encoding information on a blockchain",
    ans2: "A reward you get for lending Bitcoin",
    ans3: "A digital currency issued by a central bank",
    ans4: "A protocol used to convert digital currencies into real cash"

  },
  {
    questionID: 18,
    question: "What is staking?",
    answer: "Pledging your tokens for use to help verify transactions",

    ans1: "Pledging your tokens for use to help verify transactions",
    ans2: "Slang for buying crypto",
    ans3: "Lending your cryptocurrency to other users",
    ans4: "A way of buying crypto through a third party application"

  },
  {
    questionID: 19,
    question: "What is a rug pull?",
    answer: "The crypto equivalent of a pump and dump",

    ans1: "An alternative cryptocurrency",
    ans2: "The crypto equivalent of a pump and dump",
    ans3: "Slang for teasing someone about their crypto purchases",
    ans4: "An upgrade to a cryptocurrency platfrom"

  },
  {
    questionID: 20,
    question: "Why is Cardano often described as a green coin?",
    answer: "The method for verifying transactions is different and less energy intensive than for Bitcoin",

    ans1: "It mandates that renewable power must be used for coin mining",
    ans2: "It's less popular and smaller than BTC, so it simply uses less energy",
    ans3: "The method for verifying transactions is different and less energy intensive than for Bitcoin",
    ans4: "The logo for the coin is green and they promote recycling"

  },
  {
    questionID: 21,
    question: "What are Tokenomics?",
    answer: "The science of the tokens economy",

    ans1: "The science of the tokens economy",
    ans2: "A name for a new cryptocurrency",
    ans3: "A way of buying a new coin",
    ans4: "How cheap a token / coin is"

  },
  {
    questionID: 22,
    question: "What is Total Supply?",
    answer: "The number of tokens that exist at present, excluding any that might have gotten burned",

    ans1: "The number of tokens that exist at present, excluding any that might have gotten burned",
    ans2: "The maximum amount of tokens that can ever exist",
    ans3: "The price of the coin multiplied by the quantity available",
    ans4: "The final value of the coin once all of them have been generated"

  },
  {
    questionID: 23,
    question: "What is a stable coin?",
    answer: "Cryptocurrencies where the price is designed to be pegged to a cryptocurrency or fiat",

    ans1: "Cryptocurrencies where the price is designed to be pegged to a cryptocurrency or fiat",
    ans2: "Cryptocurrencies which you can put normal fiat currencies into",
    ans3: "The cryptocurrency equivalent for commodities",
    ans4: "A coin whose price stays stable 24/7 regardless of market volatility"

  },
  {
    questionID: 24,
    question: "Who should have access to your private key?",
    answer: "You and only you",

    ans1: "No one",
    ans2: "Your parents",
    ans3: "You and only you",
    ans4: "Your bank"

  },
  {
    questionID: 25,
    question: "What is a Decentralised Application?",
    answer: "An application which runs on a decentralised computing system",

    ans1: "An application which runs on a decentralised computing system",
    ans2: "An application which runs off the use of smart contracts",
    ans3: "An token which can be used on centralised browesers like Google",
    ans4: "An app that you can only access with crypto"

  },
  {
    questionID: 26,
    question: "What are the sidechains built for scalability on top of other blockchain called?",
    answer: "Layer 2's",

    ans1: "Layers 1's",
    ans2: "Softchains",
    ans3: "Another blockchain",
    ans4: "Layer 2's"

  },
  {
    questionID: 27,
    question: "What is a Decentralised Exchange?",
    answer: "An exchange which allows for direct peer-to-peer cryptocurrency transactions",

    ans1: "An exchange which is controlled by a single entity",
    ans2: "An exchange which you can only hold cryptocurrencies, not buy or sell",
    ans3: "An exchange which allows for direct peer-to-peer cryptocurrency transactions",
    ans4: "An exchange which dont allow for peer-to-peer transactions"

  },
  {
    questionID: 28,
    question: "What is a Centralised Exchange?",
    answer: "A business that allows customers to trade cryptocurrencies or digital currencies for other assets",

    ans1: "A business that allows customers to trade cryptocurrencies or digital currencies for other assets",
    ans2: "An exchange which allows for peer-to-peer transactions to take place on the chain",
    ans3: "An exchange where your private keys are held by you as opposed to held by a business",
    ans4: "A business that allows customers to trade cryptocurrencies via a peer-to-peer manor"

  },
  {
    questionID: 29,
    question: "What is the advantage of using a Decentralised Exchange?",
    answer: "You have access to alot more tokens and you don't have to KYC if you want to trade",

    ans1: "You have access to alot more tokens and you don't have to KYC if you want to trade",
    ans2: "There is high volumes of liquidity meanining you dont have to worry about them running out of tokens",
    ans3: "Speed and cost means transactions take place quicky with minimal fails",
    ans4: "You can use trading bots to place trades for you"

  },
  {
    questionID: 30,
    question: "What is the disadvantage of using a Decentralised Exchange?",
    answer: "Higher gas fees and order type limitations",

    ans1: "You don't have custody of your private keys",
    ans2: "There is manipulation and downtime on exchanges",
    ans3: "Less security and your coins are at risk",
    ans4: "Higher gas fees and order type limitations"

  },
  {
    questionID: 31,
    question: "Why was Ethereum created?",
    answer: "To enable developers to build and publish smart contracts and distributed applications",

    ans1: "To be a platform where NFTs can be minted on and to overtake Bitcoin",
    ans2: "To enable developers to build and publish smart contracts and distributed applications",
    ans3: "To be a store of value for the whole crypto space and allow for new development",
    ans4: "To enable developers to build centralised appliactions which run quickly and are scalable"

  },
  {
    questionID: 32,
    question: "Where do you store Cryptocurrencies?",
    answer: "On a Blockchain",

    ans1: "On a Blockchain",
    ans2: "On a Chain Wallet",
    ans3: "On a private key",
    ans4: "In a Bank Account"

  },
  {
    questionID: 33,
    question: "What is a cryptocurrency fund?",
    answer: "A portfolio containing a variety of digital assets",

    ans1: "A way for people new to crypto to get their hands on some coins",
    ans2: "An opportunity that's only available to high net worth individuals",
    ans3: "A portfolio containing a variety of digital assets",
    ans4: "A crowdfunding initiative to launch a new cryptocurrency"

  },
  {
    questionID: 34,
    question: "What does HODL stand for?",
    answer: "Hold On For Dear Life",

    ans1: "Hold On For Dear Life",
    ans2: "Heros Only Die Last",
    ans3: "Holy Crypto Only Dies Lonely",
    ans4: "Hold Only Until Debts Leave"

  },
  {
    questionID: 35,
    question: "What are the most important features to look for in a token fund platform?",
    answer: "Liquidity, a wide choice of popular cryptocurrencies and a dashboard to help control the overal performance",

    ans1: "A platform where portfolio managers have full control over investor funds",
    ans2: "A crypto-only platform where bank card deposits are not accepted",
    ans3: "Liquidity, a wide choice of popular cryptocurrencies and a dashboard to help control the overal performance",
    ans4: "Scalability and security, meaning that the fund will likely do very well in the future"

  },
  {
    questionID: 36,
    question: "How Do Bitcoin Miners Make Money?",
    answer: "Through transaction fees and block rewards",

    ans1: "Through transaction fees and block rewards",
    ans2: "Transaction fees only",
    ans3: "The block reward only",
    ans4: "They earn a salary"

  },
  {
    questionID: 37,
    question: "What does P2P stand for?",
    answer: "Peer to Peer",

    ans1: "Password to Password",
    ans2: "Peer to Peer",
    ans3: "Product to Product",
    ans4: "Private Key to Private Key"
  },
  {
    questionID: 38,
    question: "What is a node?",
    answer: "A computer on a blockchain network",

    ans1: "A type of cryptocurrency",
    ans2: "A blockchain containing transactions",
    ans3: "A computer on a blockchain network",
    ans4: "An exchange where you buy coins"
  },
  {
    questionID: 39,
    question: "Which one of the following is a DEX?",
    answer: "Uniswap",

    ans1: "Binance",
    ans2: "KuCoin",
    ans3: "Gate.io",
    ans4: "Uniswap"
  },
  {
    questionID: 40,
    question: "Where is the least safe place to store you crypto assets?",
    answer: "On an exchange",

    ans1: "In your pocket",
    ans2: "On an exchange",
    ans3: "On a hot wallet",
    ans4: "At your work desk"
  },
  {
    questionID: 41,
    question: "What is a miner?",
    answer: "Computers that validate and process blockchain transactions",

    ans1: "A special type of blockchain",
    ans2: "An algorithm that predicts the next part of the chain",
    ans3: "A person doing calculations to verify a transaction",
    ans4: "Computers that validate and process blockchain transactions"
  },
  {
    questionID: 42,
    question: "Where can you buy cryptocurrency?",
    answer: "All of the above",

    ans1: "A private transaction",
    ans2: "An exchange",
    ans3: "A Bitcoin ATM",
    ans4: "All of the above"
  },
  {
    questionID: 43,
    question: "What is the term for when a blockchain splits?",
    answer: "A fork",

    ans1: "A fork",
    ans2: "A merger",
    ans3: "A sidechain",
    ans4: "A division"
  },
  {
    questionID: 44,
    question: "What is a genesis block?",
    answer: "The first block on the Blockchain",

    ans1: "The first block after each halving",
    ans2: "A special block that cannot be seen by anyone",
    ans3: "The second transaction of a Blockchain",
    ans4: "The first block on the Blockchain"
  },
  {
    questionID: 45,
    question: "Asymmetric encryption uses:",
    answer: "Public and Private keys",

    ans1: "Public keys only",
    ans2: "Private keys only",
    ans3: "Public and Private keys",
    ans4: "Proof of Stake"
  },
  {
    questionID: 46,
    question: "Which of these was the first meme coin?",
    answer: "Dogecoin",

    ans1: "XRP",
    ans2: "Floki",
    ans3: "Dogecoin",
    ans4: "Shiba Inu"
  },
  {
    questionID: 47,
    question: "Who created Ethereum?",
    answer: "Vitalik Buterin",

    ans1: "Chris Larsen",
    ans2: "Vitalik Buterin",
    ans3: "Charles Hoskinson",
    ans4: "Anatoly Yakovenko"
  },
  {
    questionID: 48,
    question: "What year did BTC first hit $50,000?",
    answer: "2021",

    ans1: "2017",
    ans2: "2021",
    ans3: "2020",
    ans4: "2018"
  },
  {
    questionID: 49,
    question: "What is Circulating Supply?",
    answer: "The number of cryptocurrency coins or tokens that are publicly available and circulating in the market",

    ans1: "The number of cryptocurrency coins or tokens that will be publicly available and circulating in the market after release",
    ans2: "The number of cryptocurrency coins or tokens that are publicly available and circulating in the market",
    ans3: "The number of cryptocurrency coins or tokens that are publicly available including the coins that are burnt",
    ans4: "The number of cryptocurrency coins or tokens that will be publicly available once all the coins are mined"
  },
  {
    questionID: 50,
    question: "What is an NFT?",
    answer: "A unique and non-interchangeable unit of data stored on a digital ledger",

    ans1: "A unique and non-interchangeable unit of data stored on a hard drive",
    ans2: "A unique and interchangeable unit of data stored on a digital ledger",
    ans3: "A unique and non-interchangeable unit of data stored on a digital ledger",
    ans4: "A unique and interchangeable unit of data stored on a cloud computer"
  },
  {
    questionID: 51,
    question: "Which one of the following is a CEX?",
    answer: "KuCoin",

    ans1: "PancakeSwap",
    ans2: "KuCoin",
    ans3: "1inch",
    ans4: "Uniswap"
  },
];