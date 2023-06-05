// let apiQuotes = [];
import { OurlocalQoutes } from './quotes'; 

function newQuote() {
    const quote = OurlocalQoutes[Math.floor(Math.random()*OurlocalQoutes.length)];
    console.log(quote);
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
