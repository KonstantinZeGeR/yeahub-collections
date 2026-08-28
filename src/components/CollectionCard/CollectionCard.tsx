import type { Collection } from "../../types/collection";
import styles from "./CollectionCard.module.css";

type CollectionCardProps = {
  collection: Collection;
};

export function CollectionCard({ collection }: CollectionCardProps) {
  const { title, imageSrc, isFree, keywords, specializations, questionsCount } =
    collection;

  return (
    <li className={styles.card}>
      <img
        className={styles.image}
        src={imageSrc ?? "/Product-image.svg"}
        alt={title}
        onError={(event) => {
          const img = event.currentTarget;
          img.onerror = null;
          img.src = "/Product-image.svg";
        }}
      />
      <div className={styles.content}>
        <ul className={styles.keywords}>
          {keywords.map((keyword) => (
            <li key={keyword} className={styles.keyword}>
              {keyword}
            </li>
          ))}
        </ul>

        <h3 className={styles.title}>{title}</h3>

        <div className={styles.meta}>
          <span className={styles.access}>
            {isFree ? "Для всех" : "Для участников"}
          </span>
          <span className={styles.questions}>{questionsCount} вопросов</span>
        </div>
        <ul className={styles.specializations}>
          {specializations.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
