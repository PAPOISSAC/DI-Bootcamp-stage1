let quotes = [
    { id: 0, author: 'Albert Einstein', quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.', likes: 0 },
    { id: 1, author: 'Mark Twain', quote: 'The secret of getting ahead is getting started.', likes: 0 },
    // Add more quotes as needed
];

let currentQuoteIndex = -1;

const getElement = (id) => document.getElementById(id);

const generateRandomQuote = () => {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex);

    currentQuoteIndex = newIndex;
    displayCurrentQuote();
};

const displayCurrentQuote = () => {
    const quoteSection = getElement('quoteSection');
    quoteSection.textContent = `${getCurrentQuote().quote} - ${getCurrentQuote().author} (Likes: ${getCurrentQuote().likes})`;
};

const getCurrentQuote = () => quotes[currentQuoteIndex];

const addNewQuote = () => {
    const newQuote = {
        id: quotes.length,
        author: getElement('authorInput').value,
        quote: getElement('quoteInput').value,
        likes: 0
    };
    quotes.push(newQuote);
    clearInputFields();
};

const clearInputFields = () => {
    getElement('quoteInput').value = '';
    getElement('authorInput').value = '';
};

const displayCount = (count) => alert(`Count: ${count}`);

const getWordCount = (quote) => quote.split(/\s+/).length;

const likeCurrentQuote = () => {
    getCurrentQuote().likes++;
    displayCurrentQuote();
};

const filterQuotesByAuthor = () => {
    const authorName = getElement('authorFilter').value.toLowerCase();
    const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase() === authorName);

    if (filteredQuotes.length > 0) {
        currentQuoteIndex = quotes.indexOf(filteredQuotes[0]);
        displayCurrentQuote();
    } else {
        alert('No quotes found for the specified author.');
    }
};

const showPreviousQuote = () => {
    currentQuoteIndex > 0 ? currentQuoteIndex-- : alert('No previous quote available.');
    displayCurrentQuote();
};

const showNextQuote = () => {
    currentQuoteIndex < quotes.length - 1 ? currentQuoteIndex++ : alert('No next quote available.');
    displayCurrentQuote();
};

getElement('generateButton').addEventListener('click', generateRandomQuote);
getElement('addQuoteButton').addEventListener('click', addNewQuote);
getElement('charCountButton').addEventListener('click', () => displayCount(getCurrentQuote().quote.length));
getElement('charCountNoSpaceButton').addEventListener('click', () => displayCount(getCurrentQuote().quote.replace(/\s/g, '').length));
getElement('wordCountButton').addEventListener('click', () => displayCount(getWordCount(getCurrentQuote().quote)));
getElement('likeButton').addEventListener('click', likeCurrentQuote);
getElement('filterButton').addEventListener('click', filterQuotesByAuthor);
getElement('prevButton').addEventListener('click', showPreviousQuote);
getElement('nextButton').addEventListener('click', showNextQuote);
