let apiQuotes = [];

let newQuote =() => {
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    alert(quote);
}
newQuote();

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json(); 
        newQuote();
    } catch (error) {
        alert('error');
    }
}

getQuotes();