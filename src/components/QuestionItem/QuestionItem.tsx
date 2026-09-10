import { useState } from "react";
import type { Question } from "../../types/question";
import styles from "./QuestionItem.module.css";
import { Link } from "react-router-dom";

type QuestionItemProps = {
  question: Question;
};

export function QuestionItem({ question }: QuestionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={styles.item}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.title}>{question.title}</span>
        <span className={styles.chevron}>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className={styles.body}>
          <div className={styles.meta}>
            <span className={styles.badge}>
              Рейтинг: <b className={styles.value}>{question.rate}</b>
            </span>
            <span className={styles.badge}>
              Сложность: <b className={styles.value}>{question.complexity}</b>
            </span>
          </div>

          {question.code && (
            <pre className={styles.code}>
              <code>{question.code}</code>
            </pre>
          )}

          <div
            className={styles.answer}
            dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
          />
          <Link to={`/questions/${question.id}`} className={styles.more}>Подробнее →</Link>
        </div>
      )}
    </li>
  );
}
