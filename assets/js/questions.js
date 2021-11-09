/* jshint esversion: 8 */

// creating an array and passing the number, questions, options, and answers
let questions = [{

    question: "How much has Bitcoin's value grown since it started?",
    answer: "1000%",

    ans1: "150%",
    ans2: "500%",
    ans3: "1000%",
    ans4: "850%"
  },
  {
    question: "What is a smart contract?",
    answer: "Programs stored on a blockchain that run when predetermined conditions are met",

    ans1: "A computer protocol that runs 24/7 without breakdowns",
    ans2: "Programs stored on a blockchain that run when predetermined conditions are met",
    ans3: "A cloud-based contract stored on a public blockchain",
    ans4: "Artificial intelligence assisted contract which run when conditions are met",


  },
  {
    question: "Who invented Bitcoin?",
    answer: "Satoshi Nakamoto",

    ans1: "The U.S Government",
    ans2: "Satoshi Nakamoto",
    ans3: "A group of hackers",
    ans4: "Steve Jobs",

  },
  {
    question: "What is a Private Key?",
    answer: "The ability to access the Blockchain",

    ans1: "The password to your account",
    ans2: "Performing a transaction anonymously",
    ans3: "The secret number that generates your public address",
    ans4: "The ability to access the Blockchain"

  },
  {
    question: "What is a Bitcoin Block?",
    answer: "A Bitcoin transaction",

    ans1: "A Bitcoin transaction",
    ans2: "All the Bitcoin transactions",
    ans3: "A virtual brick used in Minecraft",
    ans4: "A set of Bitcoin transactions"

  },
  {
    question: "What is cold storage?",
    answer: "Storing your private key offline not connected to the internet",

    ans1: "Switching your phone off as you make a transaction",
    ans2: "When you store you wallet in a cold room",
    ans3: "Cooling your mining equipment with extra fans to stop over heating",
    ans4: "Storing your private key offline not connected to the internet"
  },
  {
    question: "What is a Blockchain?",
    answer: "A set of blocks containing transactions",

    ans1: "A centralised database that stores transactions",
    ans2: "The Bitcoin software protocol",
    ans3: "A set of blocks containing transactions",
    ans4: "A set of transactions"
  },
  {
    question: "How many Bitcoins will ever be mined?",
    answer: "21 Million",

    ans1: "21 Million",
    ans2: "20 Million",
    ans3: "21 Billion",
    ans4: "20 Billion"
  },
  {
    question: "What is Proof of Work?",
    answer: "The competition between miners to find the correct hash",

    ans1: "A way of proving that Bitcoins have been sent and received from your wallet",
    ans2: "The competition between miners to find the correct hash",
    ans3: "A tool used in mining to generate the next transaction",
    ans4: "The competition between miners to not fully disclose transactions"
  },
  {
    question: "What is an advantage of Bitcoin?",
    answer: "The total money supply is pre-determined",

    ans1: "It's the fastest cryptocurrency there is",
    ans2: "You can deposit it in a bank account",
    ans3: "The total money supply is pre-determined",
    ans4: "It's in-built Inflation"
  },
  {
    question: "What is the second largest cryptocurrency?",
    answer: "Ethereum",

    ans1: "Ethereum",
    ans2: "Cardano",
    ans3: "Ripple",
    ans4: "Dodge"
  },
  {
    question: "What is Proof of Stake?",
    answer: "A type of consensus mechanism used to validate cryptocurrency transactions",

    ans1: "A type of consensus mechanism used to validate cryptocurrency transactions",
    ans2: "A way to purchase new coins for your wallet",
    ans3: "A way of generating new blocks buy burning old blocks",
    ans4: "A type of consensus mechanism used to mine new cryptocurrency transactions"

  },
  {
    question: "How long is a Bitcoin Block?",
    answer: "10 Minutes",

    ans1: "660 Seconds",
    ans2: "10 Minutes",
    ans3: "As long as a piece of string",
    ans4: "1 Hour"

  },
  {
    question: "When was the Bitcoin software first released?",
    answer: "2009",

    ans1: "2002",
    ans2: "2009",
    ans3: "2012",
    ans4: "2020"

  },
  {
    question: "What is Ether’s connection to Ethereum?",
    answer: "Ether is a cryptocurrency, Ethereum is a blockchain platform",

    ans1: "They are just different names for the same cryptocurrency",
    ans2: "Ether is a cryptocurrency, Ethereum is a blockchain platform",
    ans3: "Ethereum is a cryptocurrency, Ether is a blockchain platform",
    ans4: "Ether is a more expensive coin than Ethereum"

  },
  {
    question: "Which of these cryptocurrencies is the oldest?",
    answer: "Dogecoin",

    ans1: "Ether",
    ans2: "Tether",
    ans3: "Dogecoin",
    ans4: "Cardano"

  },
  {
    question: "What is a CBDC?",
    answer: "A digital currency issued by a central bank",

    ans1: "A way of encoding information on a blockchain",
    ans2: "A reward you get for lending Bitcoin",
    ans3: "A digital currency issued by a central bank",
    ans4: "A protocol used to convert digital currencies into real cash"

  },
  {
    question: "What is staking?",
    answer: "Pledging your tokens for use to help verify transactions",

    ans1: "Pledging your tokens for use to help verify transactions",
    ans2: "When you donate your tokens to an exchange",
    ans3: "Lending your cryptocurrency to other users with no reward",
    ans4: "A way of buying crypto through a third party application"

  },
  {
    question: "What is a rug pull?",
    answer: "The crypto equivalent of a pump and dump",

    ans1: "An alternative cryptocurrency",
    ans2: "The crypto equivalent of a pump and dump",
    ans3: "Slang for teasing someone about their crypto purchases",
    ans4: "An upgrade to a cryptocurrency platfrom"

  },
  {
    question: "What are Tokenomics?",
    answer: "The science of the tokens economy",

    ans1: "The science of the tokens economy",
    ans2: "A name for a new cryptocurrency",
    ans3: "A way of buying a new coin",
    ans4: "How cheap a token / coin is"

  },
  {
    question: "What is Total Supply?",
    answer: "The number of tokens that exist at present, excluding any that might have gotten burned",

    ans1: "The number of tokens that exist at present, excluding any that might have gotten burned",
    ans2: "The maximum amount of tokens that can ever exist",
    ans3: "The price of the coin multiplied by the quantity available",
    ans4: "The final value of the coin once all of them have been generated"

  },
  {
    question: "What is a stable coin?",
    answer: "Cryptocurrencies where the price is designed to be pegged to a cryptocurrency or fiat",

    ans1: "Cryptocurrencies where the price is designed to be pegged to a cryptocurrency or fiat",
    ans2: "Cryptocurrencies which you can put normal fiat currencies into",
    ans3: "The cryptocurrency equivalent for commodities",
    ans4: "A coin whose price stays stable 24/7 regardless of market volatility"

  },
  {
    question: "Who should have access to your private key?",
    answer: "You and only you",

    ans1: "No one",
    ans2: "Your parents",
    ans3: "You and only you",
    ans4: "Your bank"

  },
  {
    question: "What is a Decentralised Application?",
    answer: "An application which runs on a decentralised computing system",

    ans1: "An application which runs on a decentralised computing system",
    ans2: "An application which runs off smart contracts",
    ans3: "An token which can be used on centralised browesers like Google",
    ans4: "An application that you can only access with crypto"

  },
  {
    question: "What are the sidechains built for scalability on top of other blockchain called?",
    answer: "Layer 2's",

    ans1: "Layers 1's",
    ans2: "Softchains",
    ans3: "Another blockchain",
    ans4: "Layer 2's"

  },
  {
    question: "What is a Decentralised Exchange?",
    answer: "An exchange which allows for direct peer-to-peer cryptocurrency transactions",

    ans1: "An exchange which is controlled by a single entity",
    ans2: "An exchange which you can only hold cryptocurrencies, not buy or sell",
    ans3: "An exchange which allows for direct peer-to-peer cryptocurrency transactions",
    ans4: "An exchange which dont allow for peer-to-peer transactions"

  },
  {
    question: "What is a Centralised Exchange?",
    answer: "A business who allow customers to trade cryptocurrencies for other assets",

    ans1: "A business who allow customers to trade cryptocurrencies for other assets",
    ans2: "An exchange which allows for peer-to-peer transactions to take place on the chain",
    ans3: "An when your private keys are held by you as opposed to held by a business",
    ans4: "A business where customers can trade cryptocurrencies via a peer-to-peer manor"

  },
  {
    question: "What is the advantage of using a Decentralised Exchange?",
    answer: "You have access to alot more tokens and you don't have to KYC if you want to trade",

    ans1: "You have access to alot more tokens and you don't have to KYC if you want to trade",
    ans2: "There is high volumes of liquidity meanining you dont have to worry about them running out of tokens",
    ans3: "Speed and cost means transactions take place quicky with minimal fails",
    ans4: "You can use trading bots to place trades for you"

  },
  {
    question: "What is the disadvantage of using a Decentralised Exchange?",
    answer: "Higher gas fees and order type limitations",

    ans1: "You don't have custody of your private keys",
    ans2: "There is manipulation and downtime on exchanges",
    ans3: "Less security and your coins are at risk",
    ans4: "Higher gas fees and order type limitations"

  },
  {
    question: "Why was Ethereum created?",
    answer: "To enable developers to build and publish smart contracts and distributed applications",

    ans1: "To be a platform where NFTs can be minted on and to overtake Bitcoin",
    ans2: "To enable developers to build and publish smart contracts and distributed applications",
    ans3: "To be a store of value for the whole crypto space and allow for new development",
    ans4: "To enable developers to build centralised appliactions which run quickly and are scalable"

  },
  {
    question: "Where do you store Cryptocurrencies?",
    answer: "On a Blockchain",

    ans1: "On a Blockchain",
    ans2: "On a Chain Wallet",
    ans3: "On a private key",
    ans4: "In a Bank Account"

  },
  {
    question: "What is a cryptocurrency fund?",
    answer: "A portfolio containing a variety of digital assets",

    ans1: "A way for people new to crypto to get their hands on some coins",
    ans2: "An opportunity that's only available to high net worth individuals",
    ans3: "A portfolio containing a variety of digital assets",
    ans4: "A crowdfunding initiative to launch a new cryptocurrency"

  },
  {
    question: "What does HODL stand for?",
    answer: "Hold On For Dear Life",

    ans1: "Hold On For Dear Life",
    ans2: "Heros Only Die Last",
    ans3: "Holy Crypto Only Dies Lonely",
    ans4: "Hold Only Until Debts Leave"

  },
  {
    question: "How Do Bitcoin Miners Make Money?",
    answer: "Through transaction fees and block rewards",

    ans1: "Through transaction fees and block rewards",
    ans2: "Transaction fees and through a salary",
    ans3: "The block reward only",
    ans4: "They earn a salary and get paid commision"

  },
  {
    question: "What does P2P stand for?",
    answer: "Peer to Peer",

    ans1: "Password to Password",
    ans2: "Peer to Peer",
    ans3: "Product to Product",
    ans4: "Private Key to Private Key"
  },
  {
    question: "What is a node?",
    answer: "A computer on a blockchain network",

    ans1: "A type of cryptocurrency",
    ans2: "A blockchain containing transactions",
    ans3: "A computer on a blockchain network",
    ans4: "An exchange where you buy coins"
  },
  {
    question: "Which one of the following is a DEX?",
    answer: "Uniswap",

    ans1: "Binance",
    ans2: "KuCoin",
    ans3: "Gate.io",
    ans4: "Uniswap"
  },
  {
    question: "Where is the least safe place to store you crypto assets?",
    answer: "On an exchange",

    ans1: "In your pocket",
    ans2: "On an exchange",
    ans3: "On a hot wallet",
    ans4: "At your work desk"
  },
  {
    question: "What is a miner?",
    answer: "Computers that validate and process blockchain transactions",

    ans1: "A special device that allows you to buy tokens",
    ans2: "An algorithm that predicts the next part of the chain",
    ans3: "A person doing calculations to verify a transaction",
    ans4: "Computers that validate and process blockchain transactions"
  },
  {
    question: "Where can you buy cryptocurrency?",
    answer: "All of the above",

    ans1: "A private transaction",
    ans2: "An exchange",
    ans3: "A Bitcoin ATM",
    ans4: "All of the above"
  },
  {
    question: "What is the term for when a blockchain splits?",
    answer: "A fork",

    ans1: "A fork",
    ans2: "A merger",
    ans3: "A sidechain",
    ans4: "A division"
  },
  {
    question: "What is a genesis block?",
    answer: "The first block on the Blockchain",

    ans1: "The first block after each halving",
    ans2: "A special block that cannot be seen by anyone",
    ans3: "The second transaction of a Blockchain",
    ans4: "The first block on the Blockchain"
  },
  {
    question: "Asymmetric encryption uses:",
    answer: "Public and Private keys",

    ans1: "Public keys only",
    ans2: "Private keys only",
    ans3: "Public and Private keys",
    ans4: "Proof of Stake"
  },
  {
    question: "Which of these was the first meme coin?",
    answer: "Dogecoin",

    ans1: "XRP",
    ans2: "Floki",
    ans3: "Dogecoin",
    ans4: "Shiba Inu"
  },
  {
    question: "Who created Ethereum?",
    answer: "Vitalik Buterin",

    ans1: "Chris Larsen",
    ans2: "Vitalik Buterin",
    ans3: "Charles Hoskinson",
    ans4: "Anatoly Yakovenko"
  },
  {
    question: "What year did BTC first hit $50,000?",
    answer: "2021",

    ans1: "2017",
    ans2: "2021",
    ans3: "2020",
    ans4: "2018"
  },
  {
    question: "What is an NFT?",
    answer: "A unique and non-interchangeable unit of data stored on a digital ledger",

    ans1: "A unique and non-interchangeable unit of data stored on a hard drive",
    ans2: "A unique and interchangeable unit of data stored on a digital ledger",
    ans3: "A unique and non-interchangeable unit of data stored on a digital ledger",
    ans4: "A unique and interchangeable unit of data stored on a cloud computer"
  },
  {
    question: "Which one of the following is a CEX?",
    answer: "KuCoin",

    ans1: "PancakeSwap",
    ans2: "KuCoin",
    ans3: "1inch",
    ans4: "Uniswap"
  },
  {
    question: "What was the first tangible item purchased with BTC?",
    answer: "Pizza",

    ans1: "A house",
    ans2: "Pizza",
    ans3: "A Boat",
    ans4: "Beer"
  },
  {
    question: "What was the name of the paper introducing Bitcoin?",
    answer: "Bitcoin: A Peer-to-Peer Electronic Cash System",

    ans1: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    ans2: "Bitcoin: A Decentralised Digital Currency",
    ans3: "Bitcoin: A Peer-to-Peer Digital Currency",
    ans4: "Bitcoin: A Decentralised Electronic Cash System"
  },
  {
    question: "What is the name of the smallest denomination of Bitcoin?",
    answer: "Satoshi",

    ans1: "Wei",
    ans2: "Satoshi",
    ans3: "MiniBit",
    ans4: "MicroBit"
  },
  {
    question: "Approximately how often does the Bitcoin block subsidy halve?",
    answer: "4 Years",

    ans1: "5 Years",
    ans2: "7 Years",
    ans3: "2 Years",
    ans4: "4 Years"
  },
  {
    question: "Finality is considered to be achieved after:",
    answer: "6 Confirmations",

    ans1: "3 Confirmations",
    ans2: "6 Confirmations",
    ans3: "10 Confirmations",
    ans4: "1 Confirmations"
  },
  {
    question: "When is the last BTC estimated to be mined?",
    answer: "2140",

    ans1: "2140",
    ans2: "2041",
    ans3: "2100",
    ans4: "2086"
  },
  {
    question: "What is the name of a fundraising method in which new projects will sell their cryptocurrency to investors?",
    answer: "Initial Coin Offering (ICO)",

    ans1: "Initial Dex Offering (IDO)",
    ans2: "Initial Coin Offering (ICO)",
    ans3: "Initial Public Offering (IPO)",
    ans4: "Initial Exchange Offering (IEO)"
  },
  {
    question: "What is the name used to describe the moment when/if ETH surpasses BTC in terms of Market Cap?",
    answer: "Flippening",

    ans1: "Flippening",
    ans2: "The Surpassing",
    ans3: "The Bitcoin Fall",
    ans4: "ETH Dominance"
  },
  {
    question: "What is the name of the list of allowed/trusted individuals, programs, or cryptocurrency addresses in relation to a service or event?",
    answer: "Whitelist",

    ans1: "The Chosen Ones",
    ans2: "Dead Cat Bounce",
    ans3: "Order Book",
    ans4: "Whitelist"
  },
  {
    question: "The pricing mechanism employed on the Ethereum blockchain to calculate the costs of smart contracts operations and transaction fees is called?",
    answer: "Gas",

    ans1: "Honeypot",
    ans2: "Fuel",
    ans3: "Gas",
    ans4: "Wallet Fees"
  }
];