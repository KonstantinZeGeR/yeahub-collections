import { getCollections } from "../../api/collections/getCollections";
import { CollectionCard } from "../../components/CollectionCard/CollectionCard";
import { useFetch } from "../../hooks/useFetch";
import styles from "./CollectionsPage.module.css";

export function CollectionsPage() {
  const {
    data: collectionsResponse,
    loading,
    error,
  } = useFetch(() => getCollections({ limit: 10 }));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!collectionsResponse) return null;

  return (
    <ul className={styles.list}>
      {collectionsResponse.data.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </ul>
  );
}
