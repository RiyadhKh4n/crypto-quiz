// creating an array and passing the number, questions, options, and answers
let questions = [
    {

    question: "How much has Bitcoin's value grown since it started?",
    answer: "1000%",
    options: [
      "150%",
      "500%",
      "1000%",
      "850%"
    ]
  },
  {
    question: "What is a smart contract?",
    answer: "Programs stored on a blockchain that run when predetermined conditions are met",
    options: [
      "A computer protocol that runs 24/7",
      "A cloud-based contract stored on a blockchain",
      "Artificial intelligence assisted contract",
      "Programs stored on a blockchain that run when predetermined conditions are met"
    ]
  },
  {
    question: "Who invented Bitcoin?",
    answer: "Satoshi Nakamoto",
    options: [
      "Satoshi Nakamoto",
      "The U.S Government",
      "A group of hackers",
      "Steve Jobs"
    ]
  },
  {
    question: "What is a Private Key?",
    answer: "The ability to access the Blockchain",
    options: [
      "The password to your account",
      "Performing a transaction anonymously",
      "The secret number that generates your public address",
      "The ability to access the Blockchain"
    ]
  },
  {
    question: "What is a Bitcoin Block?",
    answer: "A Bitcoin Transaction",
    options: [
      "A Bitcoin Transaction",
      "The main community behind Bitcoin",
      "A virtual brick used in Minecraft",
      "A set of Bitcoin transactions"
    ]
  },
  {
    question: "What is cold storage?",
    answer: "Storing your Private key offline",
    options: [
      "Switching your phone off as you make a transaction",
      "Running a Bitcoin node offline",
      "Cooling your mining equipment with extra fans to stop over heating",
      "Storing your Private key offline"
    ]
  },
  {
    question: "What is a Blockchain?",
    answer: "A set of blocks containing transactions",
    options: [
      "A centralised database",
      "The Bitcoin software protocol",
      "A set of blocks containing transactions",
      "A set of transactions"
    ]

  },
  {
    question: "How many Bitcoins will ever be mined?",
    answer: "21 Million",
    options: [
      "21 Million",
      "20 Million",
      "21 Billion",
      "20 Billion"
    ]

  },
  {
    question: "What is Proof of Work?",
    answer: "The competition between miners to find the correct hash",
    options: [
      "A way of proving that Bitcoins have been sent and received from your wallet",
      "The competition between miners to find the correct hash",
      "A tool used in mining to generate the next transaction",
      "The competition between miners to not fully disclose transactions"
    ]

  },
  {
    question: "What is an advantage of Bitcoin?",
    answer: "The total money supply is pre-determined",
    options: [
      "It's the fastest confirming crypto currency",
      "Your grandma will be totally ok to use it to buy groceries",
      "The total money supply is pre-determined",
      "It's in-built Inflation"
    ]
  },
  {
    question: "What is the second largest cryptocurrency?",
    answer: "Ethereum",
    options: [
      "Ethereum",
      "Cardano",
      "Ripple",
      "Dodge"
    ]
  },
  {
    question: "What is Proof of Stake?",
    answer: "A type of consensus mechanism used to validate cryptocurrency transactions",
    options: [
      "A type of consensus mechanism used to validate cryptocurrency transactions",
      "A way to purchase new coins for your wallet",
      "A way of generating new blocks buy burning old blocks",
      "A type of consensus mechanism used to mine new cryptocurrency transactions"
    ]
  },
  {
    question: "How long is a Bitcoin Block?",
    answer: "10 Minutes",
    options: [
      "660 Seconds",
      "10 Minutes",
      "As long as a piece of string",
      "1 Hour"
    ]
  },
  {
    question: "When was the Bitcoin software first released?",
    answer: "2012",
    options: [
      "2002",
      "2009",
      "2012",
      "2020"
    ]
  },
  {
    question: "What is Ether’s connection to Ethereum?",
    answer: "Ether is a cryptocurrency, Ethereum is a blockchain platform",
    options: [
      "They are just different names for the same cryptocurrency",
      "Ether is a cryptocurrency, Ethereum is a blockchain platform",
      "Ethereum is a cryptocurrency, Ether is a blockchain platform",
      "Ether is a more expensive coin than Ethereum"
    ]
  },
  {
    question: "Which of these cryptocurrencies is the oldest?",
    answer: "Dogecoin",
    options: [
      "Ether",
      "Tether",
      "Dogecoin",
      "Cardano"
    ]
  },
  {
    question: "What is a CBDC?",
    answer: "A digital currency issued by a central bank",
    options: [
      "A way of encoding information on a blockchain",
      "A reward you get for lending Bitcoin",
      "A digital currency issued by a central bank",
      "A protocol used to convert digital currencies into real cash"
    ]
  },
  {
    question: "What is staking?",
    answer: "Pledging your tokens for use to help verify transactions",
    options: [
      "Pledging your tokens for use to help verify transactions",
      "Slang for buying crypto",
      "Lending your cryptocurrency to other users",
      "A way of buying crypto through a third party application"
    ]
  },
  {
    question: "What is a rug pull?",
    answer: "The crypto equivalent of a pump and dump",
    options: [
      "An alternative cryptocurrency",
      "The crypto equivalent of a pump and dump",
      "Slang for teasing someone about their crypto purchases",
      "An upgrade to a cryptocurrency platfrom"
    ]
  },
  {
    question: "Why is Cardano often described as a green coin?",
    answer: "The method for verifying transactions is different and less energy intensive than for Bitcoin",
    options: [
      "It mandates that renewable power must be used for coin mining",
      "It's less popular and smaller than BTC, so it simply uses less energy",
      "The method for verifying transactions is different and less energy intensive than for Bitcoin",
      "Its logo is green"
    ]
  },
  {
    question: "What are Tokenomics?",
    answer: "The science of the tokens economy",
    options: [
      "The science of the tokens economy",
      "A name for a new cryptocurrency",
      "A way of buying a new coin",
      "How cheap a token / coin is"
    ]
  },
  {
    question: "What is Total Supply?",
    answer: "The number of tokens that exist at present, excluding any that might have gotten burned",
    options: [
      "The number of tokens that exist at present, excluding any that might have gotten burned",
      "The maximum amount of tokens that can ever exist",
      "The price of the coin multiplied by the quantity available",
      "The final value of the coin once all of them have been generated"
    ]
  },
  {
    question: "What is a stable coin?",
    answer: "Cryptocurrencies where the price is designed to be pegged to a cryptocurrency",
    options: [
      "Cryptocurrencies where the price is designed to be pegged to a cryptocurrency",
      "Cryptocurrencies which you can put normal fiat currencies into",
      "The crypto equivalent for commodities",
      "A coin whose price stays stable"
    ]
  },
  {
    question: "Who should have access to your private key?",
    answer: "You and only you",
    options: [
      "No one",
      "Your parents",
      "You and only you",
      "Your bank"
    ]
  },
  {
    question: "What is a DApp?",
    answer: "A decentralised app",
    options: [
      "A decentralised app",
      "A dog breed",
      "An Ethereum token",
      "An app that you can only access with crypto"
    ]
  },
  {
    question: "What are the sidechains built for scalability on top of other blockchain called?",
    answer: "Layer 2's",
    options: [
      "Layers 1's",
      "Softchains",
      "Another blockchain",
      "Layer 2's"
    ]
  }
];