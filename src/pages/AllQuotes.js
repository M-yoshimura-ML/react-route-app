import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Masa', text: 'Learning is fun!' },
    { id: 'q2', author: 'Yoshi', text: 'Learning is Great!' }
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    )
}

export default AllQuotes;