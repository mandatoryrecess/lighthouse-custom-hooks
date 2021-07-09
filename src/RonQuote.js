import useAxios from 'hooks/useAxios';

const RonQuote = function () {
  const { body, error, pending } = useAxios("http://ron-swanson-quotes.herokuapp.com/v2/quotes");

  return (
    <li>
      {error && error}
      {body && body[0]}
      {pending && "Pending"}
    </li>
  );
};

export default RonQuote;