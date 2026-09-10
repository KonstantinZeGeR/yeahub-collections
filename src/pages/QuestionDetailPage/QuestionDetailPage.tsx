import { useParams } from "react-router-dom";
import styles from "./QuestionDetailPage.module.css";
import { useFetch } from "../../hooks/useFetch";
import { getQuestionById } from "../../api/questions/getQuestionById";

export function QuestionDetailPage() {
  const { questionId } = useParams();
  const id = Number(questionId);

  const {
    data: question,
    loading,
    error,
  } = useFetch(() => getQuestionById(id), [id]);

  if (Number.isNaN(id)) return <p>Not found</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!question) return null;

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.info}>
          <img
            src={question.imageSrc ?? "/Product-image.svg"}
            alt={question.title}
            className={styles.image}
          />
          <div>
            <h1 className={styles.title}>{question.title}</h1>
            <p className={styles.description}>{question.description}</p>
          </div>
        </div>
        <div className={styles.answerBlock}>
          <h2 className={styles.answerTitle}>Краткий ответ</h2>
          <div
            className={styles.answer}
            dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
          />
        </div>

        <div className={styles.answerBlock}>
          <h2 className={styles.answerTitle}>Развёрнутый ответ</h2>
          <div
            className={styles.answer}
            dangerouslySetInnerHTML={{ __html: question.longAnswer }}
          />
        </div>
      </div>
      <aside className={styles.sidebar}>
        <div className={styles.block}>
          <h2 className={styles.label}>Уровень</h2>
          <div className={styles.meta}>
            <span className={styles.badge}>
              Сложность: <b className={styles.value}>{question.complexity}</b>
            </span>
            <span className={styles.badge}>
              Рейтинг: <b className={styles.value}>{question.rate}</b>
            </span>
          </div>
        </div>

        <div className={styles.block}>
          <h2 className={styles.label}>Навыки</h2>
          <ul className={styles.chips}>
            {question.questionSkills.map(({ id, title, imageSrc }) => (
              <li key={id} className={styles.chip}>
                {imageSrc && (
                  <img className={styles.chipIcon} src={imageSrc} alt="" />
                )}
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h2 className={styles.label}>Ключевые слова</h2>
          <ul className={styles.keywords}>
            {question.keywords.map((keyword) => (
              <li key={keyword} className={styles.keyword}>
                #{keyword}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h2 className={styles.label}>Автор</h2>
          <span>{question.createdBy?.username ?? "Неизвестен"}</span>
        </div>
      </aside>
    </div>
  );
}
