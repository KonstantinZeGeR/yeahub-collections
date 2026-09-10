import type { Question } from "../../types/question";
import { apiInstance } from "../instance";

export async function getQuestionById(id: number) {
  const response = await apiInstance.get<Question>(
    `/questions/public-questions/${id}`,
  );

  return response.data;
}
