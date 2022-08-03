import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Masa', text: 'Learning is fun!' },
    { id: 'q2', author: 'Yoshi', text: 'Learning is Great!' }
]

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    
    if(!quote){
        return (
            <p>No quote found</p>
        );
    }

    return (
        <Fragment>
            <h1>Quote Detail</h1>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}/comments`} >
            {/* <Route path='quotes/:quoteId/comments' > */}
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail;