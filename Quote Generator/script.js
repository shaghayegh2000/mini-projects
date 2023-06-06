// let apiQuotes = [];
// import { OurlocalQoutes } from './quotes'; 

const qoteContainer = document.getElementById('quote-container');
const qoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

function newQuote() {
    const quote = OurlocalQoutes[Math.floor(Math.random()*OurlocalQoutes.length)];
    authorText.textContent = quote.author;
    qoteText.textContent = quote.text;    
}
newQuote();


// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json(); 
//         newQuote();
//     } catch (error) {
//         alert('error');
//     }
// }

// getQuotes();
