const quotes = [
  {
    quote: "I'm not a happy person. But I would like to be happy.",
    author: "Ouro Kronii",
  },
  {
    quote:
      "Don't compare yourself with other people; compare your self with who you were yesterday",
    author: "Jordan Peterson",
  },
  {
    quote: "I'm as proud of we don't do as I am of what we do",
    author: "Steve Jobs",
  },
  {
    quote:
      "Someone's sitting in the shade today because someone planted a tree a long time ago",
    author: "Warren Buffett",
  },
  {
    quote: "生いきがいってやつが 光ひかり輝かがやくから",
    author: "Official髭男dism",
  },
];

const quote = document.querySelector("#quote__container span:first-child");
const author = document.querySelector("#quote__container span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
