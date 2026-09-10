import { useState } from "react";
import { getCollections } from "../../api/collections/getCollections";
import { CollectionCard } from "../../components/CollectionCard/CollectionCard";
import { useFetch } from "../../hooks/useFetch";
import styles from "./CollectionsPage.module.css";
import { Pagination } from "../../components/Pagination/Pagination";

const LIMIT = 10;

export function CollectionsPage() {
  const [page, setPage] = useState(1);

  const {
    data: collectionsResponse,
    loading,
    error,
  } = useFetch(() => getCollections({ page, limit: LIMIT }), [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!collectionsResponse) return null;

  const totalPages = Math.ceil(collectionsResponse.total / LIMIT);

  return (
    <>
      <ul className={styles.list}>
        {collectionsResponse.data.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </ul>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}
