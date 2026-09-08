import { useParams } from "react-router-dom";
import { getCollectionById } from "../../api/collections/getCollectionById";
import { useFetch } from "../../hooks/useFetch";
import styles from "./CollectionDetailPage.module.css";
import { useState } from "react";
import { getQuestions } from "../../api/questions/getQuestions";

export function CollectionDetailPage() {
  const { collectionId } = useParams();
  const [questionsPage, setQuestionsPage] = useState(1);
  const id = Number(collectionId);

  const { data: questionsResponse } = useFetch(
    () => getQuestions({ collection: id, page: questionsPage, limit: 10 }),
    [id, questionsPage],
  );

  const {
    data: collection,
    loading,
    error,
  } = useFetch(() => getCollectionById(id), [id]);

  if (Number.isNaN(id)) return <p>Not found</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!collection) return null;

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.info}>
          <img
            className={styles.image}
            src={collection.imageSrc ?? "/Product-image.svg"}
            alt={collection.title}
          />
          <div>
            <h1 className={styles.title}>{collection.title}</h1>
            <p className={styles.description}>{collection.description}</p>
          </div>
        </div>
      </div>
      <aside className={styles.sidebar}>
        <div className={styles.block}>
          <h2 className={styles.label}>Специализация</h2>
          <ul className={styles.chips}>
            {collection.specializations.map(({ id, title }) => (
              <li key={id} className={styles.chip}>
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h2 className={styles.label}>Доступ</h2>
          <span className={styles.chip}>
            {collection.isFree ? "Для всех" : "Для участников"}
          </span>
        </div>
        <div className={styles.block}>
          <h2 className={styles.label}>Компания</h2>
          <span className={styles.chip}>
            {collection.company?.title ?? "-"}
          </span>
        </div>

        <div className={styles.block}>
          <h2 className={styles.label}>Автор</h2>
          <span>{collection.createdBy?.username ?? "Неизвестен"}</span>
        </div>

        <div className={styles.block}>
          <h2 className={styles.label}>Количество вопросов</h2>
          <span className={styles.chip}>{collection.questionsCount}</span>
        </div>

        <div className={styles.block}>
          <h2 className={styles.label}>Ключевые слова</h2>
          <ul className={styles.keywords}>
            {collection.keywords.map((keyword) => (
              <li key={keyword} className={styles.keyword}>
                #{keyword}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
