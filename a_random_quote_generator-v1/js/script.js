/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// array of quotes objects, objects having the a quote and source property and some with citation and year property.

var quotes = [
  {
      quote: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.", 
      source: "Maya Angelou"
  },
  {
      quote: "It's not the load that breaks you down, it's the way you carry it.",
      source: "Lou Holtz"

  },
  {
      quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      source: "Maya Angelou"

  },
  {
      quote: "And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
      source: "Antoine de Saint-Exupéry",
      citation: "The Little Prince"
  },
  {
      quote: "If you're reading this...Congratulations, you're alive.If that's not something to smile about,then I don't know what is.",
      source: "Chad Sugg",
      citation: "Monsters Under Your Head"

  },
  {
      quote: "The two most imporDo, or do not. There is no 'try'.",
      source: "Yoda",
      citation: "The Empire Strikes Back",
      year: "1980"
  },
  {
      quote: "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
      source: "Johann Wolfgang von Goethe"
  },
  {
      quote: "The best revenge is massive success.",
      source: "Frank Sinatra"
  }
];


//obtain random quote object from quotes array.

function getRandomQuote() {

  var randomNumber = Math.floor(Math.random() * quotes.length ); //returns a random integer upto the length of the array
    
  var randomQuoteObj = quotes[randomNumber];

  return randomQuoteObj;
 }


// create random background color function 

 function random_bg_color() {
   var x = Math.floor(Math.random() * 256);
   var y = Math.floor(Math.random() * 256);
   var z = Math.floor(Math.random() * 256);

   var bgColor = "rgb(" + x + "," + y + "," + z + ")";
   return bgColor;
  }
// create and print a random quote string to the browser with random background color by calling the random color function.

  function printQuote() {

   var randomQuote = getRandomQuote();
   var htmlStr = '';

   htmlStr = '<p class="quote"> ' + randomQuote.quote +  '</p>';
   htmlStr+= '<p class="source">' + randomQuote.source;

  if(randomQuote.citation) {
    htmlStr+= '<span class="citation"> ' + randomQuote.citation + '</span>';
   }

  if (randomQuote.year) {
    htmlStr += '<span class="year">' + randomQuote.year + '</span>';
   }

    htmlStr += '</p>';

  //manipulate the DOM and update the selected div with the new elements created above
  var div = document.getElementById('quote-box');
  div.innerHTML = htmlStr;
   
  document.body.style.background = random_bg_color();

}

setInterval(printQuote, 30000 );

// Show another quote button when clicked will show a different quote.
  document.getElementById('loadQuote').addEventListener("click", printQuote, false) ;



