import useAxios from 'hooks/useAxios';

const KanyeQuote = function () {
  const { body, error, pending } = useAxios("http://api.kanye.rest");

  return (
    <li>
      {error && error}
      {body && body.quote}
      {pending && "Pending"}
    </li>
  );
};

export default KanyeQuote;