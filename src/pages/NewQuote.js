import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
        //push:go back with back button, like add a new page
        //replace:can't go back, like redirect
        history.push('/quotes');
    }
    
    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    )
}

export default NewQuote;