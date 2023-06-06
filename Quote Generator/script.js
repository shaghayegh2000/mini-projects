// let apiQuotes = [];
// import { OurlocalQoutes } from './quotes'; 

const qoteContainer = document.getElementById('quote-container');
const qoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

function newQuote() {
    const quote = OurlocalQoutes[Math.floor(Math.random()*OurlocalQoutes.length)];
    
    if (!quote.author) {
        authorText.textContent = "Unknown"
    }else {
        authorText.textContent = quote.author;
    }
    
    if (quote.text.length>120) {
        qoteText.classList.add('long-quote');
    }else {
        qoteText.classList.remove('long-quote');
    }
    
    qoteText.textContent = quote.text;    
}
newQuote();

function tweeyQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${qoteText.textContent} ${authorText.textContent};`
    window.open(twitterUrl, '_blank')
}

newQuoteBtn.addEventListener('click' , newQuote);
twitterBtn.addEventListener('click' , tweeyQuote)

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
