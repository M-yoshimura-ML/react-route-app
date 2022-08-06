import { Fragment, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
// import Comments from '../components/comments/Comments';
import LoadingSpinner from "../components/UI/LoadingSpinner";

// const DUMMY_QUOTES = [
//     { id: 'q1', author: 'Masa', text: 'Learning is fun!' },
//     { id: 'q2', author: 'Yoshi', text: 'Learning is Great!' }
// ]

const QuoteDetail = () => {
  // const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote) {
    return <p>No quote found</p>;
  }

  // const element = (
  //     <div className="centered">
  //         <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
  //     </div>
  // );

  return (
    <Fragment>
      <h1>Quote Detail</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <div className="centered">
        <Link className="btn--flat" to={`comments`}>
          Load Comments
        </Link>
      </div>
      <Outlet />
      {/* <Routes>
                <Route path={`comments`} element={<Comments />} />
            </Routes> */}
    </Fragment>
  );
};

export default QuoteDetail;
