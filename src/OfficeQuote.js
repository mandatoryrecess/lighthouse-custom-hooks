import useAxios from 'hooks/useAxios';

const OfficeQuote = function () {
  const { body, error, pending } = useAxios("https://www.officeapi.dev/api/quotes/random");

  return (
    <li>
      {error && error}
      {body &&
        <div>
          {body.data.content}
          <span> {body.data.character.firstname}</span>
        </div>
      }
      {pending && "Pending"}
    </li>
  );
};

export default OfficeQuote;