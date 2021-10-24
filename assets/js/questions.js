// creating an array and passing the number, questions, options, and answers
let questions = [{

    question: "How much has Bitcoin's value grown since it started?",
    answer: "1000%",

    ans1 = "150%",
    ans2 = "500%",
    ans3 = "1000%",
    ans4 = "850%"
  },
  {
    question: "What is a smart contract?",
    answer: "Programs stored on a blockchain that run when predetermined conditions are met",
   
    ans1 = "A computer protocol that runs 24/7",
    ans2 = "A cloud-based contract stored on a blockchain",
    ans3 = "Artificial intelligence assisted contract",
    ans4 = "Programs stored on a blockchain that run when predetermined conditions are met"
  
  },
  {
    question: "Who invented Bitcoin?",
    answer: "Satoshi Nakamoto",

    ans1 = "The U.S Government",
    ans2 = "A group of hackers",
    ans3 =  "Steve Jobs",
    ans4 = "Riyadh Khan"
  },
  {
    question: "What is a Private Key?",
    answer: "The ability to access the Blockchain",

    ans1 = "The password to your account",
    ans2 = "Performing a transaction anonymously",
    ans3 = "The secret number that generates your public address",
    ans4 = "The ability to access the Blockchain"
    
  },
  {
    question: "What is a Bitcoin Block?",
    answer: "A Bitcoin Transaction",
    
    ans1 = "A Bitcoin Transaction",
    ans2 = "The main community behind Bitcoin",
    ans3 = "A virtual brick used in Minecraft",
    ans4 = "A set of Bitcoin transactions"
    
  },
  {
    question: "What is cold storage?",
    answer: "Storing your Private key offline",
   
    ans1 = "Switching your phone off as you make a transaction",
    ans2 = "Running a Bitcoin node offline",
    ans3 = "Cooling your mining equipment with extra fans to stop over heating",
    ans4 = "Storing your Private key offline"
    
  },
  {
    question: "What is a Blockchain?",
    answer: "A set of blocks containing transactions",
 
    ans1 = "A centralised database",
    ans2 = "The Bitcoin software protocol",
    ans3 = "A set of blocks containing transactions",
    ans4 = "A set of transactions"
    

  },
  {
    question: "How many Bitcoins will ever be mined?",
    answer: "21 Million",
    
    ans1 = "21 Million",
    ans2 = "20 Million",
    ans3 = "21 Billion",
    ans4 = "20 Billion"
    

  },
  {
    question: "What is Proof of Work?",
    answer: "The competition between miners to find the correct hash",
    
    ans1 = "A way of proving that Bitcoins have been sent and received from your wallet",
    ans2 = "The competition between miners to find the correct hash",
    ans3 = "A tool used in mining to generate the next transaction",
    ans4 = "The competition between miners to not fully disclose transactions"
    
  },
  {
    question: "What is an advantage of Bitcoin?",
    answer: "The total money supply is pre-determined",
  
    ans1 = "It's the fastest confirming crypto currency",
    ans2 = "Your grandma will be totally ok to use it to buy groceries",
    ans3 = "The total money supply is pre-determined",
    ans4 = "It's in-built Inflation"

  },
  {
    question: "What is the second largest cryptocurrency?",
    answer: "Ethereum",
    
    ans1 = "Ethereum",
    ans2 = "Cardano",
    ans3 = "Ripple",
    ans4 = "Dodge"
    
  },
  {
    question: "What is Proof of Stake?",
    answer: "A type of consensus mechanism used to validate cryptocurrency transactions",
    
    ans1 = "A type of consensus mechanism used to validate cryptocurrency transactions",
    ans2 = "A way to purchase new coins for your wallet",
    ans3 = "A way of generating new blocks buy burning old blocks",
    ans4 = "A type of consensus mechanism used to mine new cryptocurrency transactions"
    
  },
  {
    question: "How long is a Bitcoin Block?",
    answer: "10 Minutes",
    
    ans1 = "660 Seconds",
    ans2 = "10 Minutes",
    ans3 = "As long as a piece of string",
    ans4 = "1 Hour"
    
  },
  {
    question: "When was the Bitcoin software first released?",
    answer: "2012",
    
    ans1 = "2002",
    ans2 = "2009",
    ans3 = "2012",
    ans4 = "2020"
    
  },
  {
    question: "What is Ether’s connection to Ethereum?",
    answer: "Ether is a cryptocurrency, Ethereum is a blockchain platform",
    
    ans1 = "They are just different names for the same cryptocurrency",
    ans2 = "Ether is a cryptocurrency, Ethereum is a blockchain platform",
    ans3 = "Ethereum is a cryptocurrency, Ether is a blockchain platform",
    ans4 = "Ether is a more expensive coin than Ethereum"
    
  },
  {
    question: "Which of these cryptocurrencies is the oldest?",
    answer: "Dogecoin",
   
    ans1 = "Ether",
    ans2 = "Tether",
    ans3 = "Dogecoin",
    ans4 = "Cardano"
    
  },
  {
    question: "What is a CBDC?",
    answer: "A digital currency issued by a central bank",
    
    ans1 = "A way of encoding information on a blockchain",
    ans2 = "A reward you get for lending Bitcoin",
    ans3 = "A digital currency issued by a central bank",
    ans4 = "A protocol used to convert digital currencies into real cash"
    
  },
  {
    question: "What is staking?",
    answer: "Pledging your tokens for use to help verify transactions",
    
    ans1 = "Pledging your tokens for use to help verify transactions",
    ans2 = "Slang for buying crypto",
    ans3 = "Lending your cryptocurrency to other users",
    ans4 = "A way of buying crypto through a third party application"
    
  },
  {
    question: "What is a rug pull?",
    answer: "The crypto equivalent of a pump and dump",
    
    ans1 = "An alternative cryptocurrency",
    ans2 = "The crypto equivalent of a pump and dump",
    ans3 = "Slang for teasing someone about their crypto purchases",
    ans4 = "An upgrade to a cryptocurrency platfrom"
    
  },
  {
    question: "Why is Cardano often described as a green coin?",
    answer: "The method for verifying transactions is different and less energy intensive than for Bitcoin",
   
    ans1 =  "It mandates that renewable power must be used for coin mining",
    ans2 =  "It's less popular and smaller than BTC, so it simply uses less energy",
    ans3 =  "The method for verifying transactions is different and less energy intensive than for Bitcoin",
    ans4 =  "Its logo is green"
    
  },
  {
    question: "What are Tokenomics?",
    answer: "The science of the tokens economy",
    
    ans1 =  "The science of the tokens economy",
    ans2 =  "A name for a new cryptocurrency",
    ans3 = "A way of buying a new coin",
    ans4 =  "How cheap a token / coin is"
    
  },
  {
    question: "What is Total Supply?",
    answer: "The number of tokens that exist at present, excluding any that might have gotten burned",
    
    ans1 =  "The number of tokens that exist at present, excluding any that might have gotten burned",
    ans2 =  "The maximum amount of tokens that can ever exist",
    ans3 =  "The price of the coin multiplied by the quantity available",
    ans4 =  "The final value of the coin once all of them have been generated"
    
  },
  {
    question: "What is a stable coin?",
    answer: "Cryptocurrencies where the price is designed to be pegged to a cryptocurrency",
   
    ans1 =  "Cryptocurrencies where the price is designed to be pegged to a cryptocurrency",
    ans2 =  "Cryptocurrencies which you can put normal fiat currencies into",
    ans3 =  "The crypto equivalent for commodities",
    ans4 =  "A coin whose price stays stable"
    
  },
  {
    question: "Who should have access to your private key?",
    answer: "You and only you",
    
    ans1 =  "No one",
    ans2 =  "Your parents",
    ans3 =  "You and only you",
    ans4 =  "Your bank"
    
  },
  {
    question: "What is a DApp?",
    answer: "A decentralised app",
    
    ans1 =  "A decentralised app",
    ans2 =  "A dog breed",
    ans3 =  "An Ethereum token",
    ans4 =  "An app that you can only access with crypto"
    
  },
  {
    question: "What are the sidechains built for scalability on top of other blockchain called?",
    answer: "Layer 2's",
    
    ans1 =  "Layers 1's",
    ans2 =  "Softchains",
    ans3 =  "Another blockchain",
    ans4 =  "Layer 2's"
    
  },
  {
    question: "What is a Decentralised Exchange?",
    answer: "A type of cryptocurrency exchange which allows for direct peer-to-peer cryptocurrency transactions",
   
    ans1 =  "An exchange which is controlled by a single entity",
    ans2 =  "An exchange which you can only hold cryptocurrencies, not buy or sell",
    ans3 =  "An exchange which allows for direct peer-to-peer cryptocurrency transactions",
    ans4 =  "An exchange which dont allow for peer-to-peer transactions"
    
  },
  {
    question: "What is a Centralised Exchange?",
    answer: "A business that allows customers to trade cryptocurrencies or digital currencies for other assets",
    
    ans1 =  "A business that allows customers to trade cryptocurrencies or digital currencies for other assets",
    ans2 =  "An exchange which allows for peer-to-peer transactions to take place on the chain",
    ans3=  "An exchange where your private keys are held by you as opposed to held by a business",
    ans4 =  "A business that allows customers to trade cryptocurrencies via a peer-to-peer manor"
    
  },
  {
    question: "What is the advantage of using a Decentralised Exchange?",
    answer: "You have access to loads more tokens and you don't have to do KYC",
   
    ans1 =  "You have access to loads more tokens and you don't have to do KYC",
    ans2 =  "There is high volumes of liquidity meanining you dont have to worry about them running out of tokens",
    ans3 =  "Speed and cost means transactions take place quicky with minimal fails",
    ans4 =  "You can use trading bots to place trades for you"
    
  },
  {
    question: "What is the disadvantage of using a Decentralised Exchange?",
    answer: "",
    
    ans1 =  "You don't have custody of your private keys",
    ans2 =  "There is manipulation and downtime on exchanges",
    ans3 =  "Less security and your coins are at risk",
    ans4 =  "Higher gas fees and order type limitations"
    
  }
];