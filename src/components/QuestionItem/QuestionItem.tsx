import { useState } from "react";
import type { Question } from "../../types/question";

type QuestionItemProps = {
  question: Question;
};

export function QuestionItem({ question }: QuestionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      {question.title}
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "▲" : "▼"}</button>
      {isOpen && (
        <div>
          <span>Рейтинг: {question.rate}</span>
          <span>Сложность: {question.complexity}</span>

          {question.code && (
            <pre>
              <code>{question.code}</code>
            </pre>
          )}

          <div dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
        </div>
      )}
    </li>
  );
}
