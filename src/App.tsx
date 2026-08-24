import { getCollections } from "./api/collections/getCollections";
import { useFetch } from "./hooks/useFetch";

export const App = () => {
  const {
    data: collectionsResponse,
    loading,
    error,
  } = useFetch(() => getCollections({ limit: 10 }));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!collectionsResponse) return null;

  return (
    <ul>
      {collectionsResponse.data.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};
