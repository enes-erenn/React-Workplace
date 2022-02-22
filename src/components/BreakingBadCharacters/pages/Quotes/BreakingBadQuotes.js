import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllQuotes,
  statusSelector,
  errorSelector,
  quotesSelector,
} from "../../../../store/QuotesSlice/QuotesSlice";

const BreakingBadQuotes = () => {
  const dispatch = useDispatch();
  const quotes = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h1>Quotes</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeed" && quotes.map((item) => <div>{item.quote}</div>)}
    </div>
  );
};

export default BreakingBadQuotes;
