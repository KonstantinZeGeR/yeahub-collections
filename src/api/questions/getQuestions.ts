import type { PaginatedResponse } from "../../types/api";
import type { Question } from "../../types/question";
import { apiInstance } from "../instance";

type GetQuestionsParams = {
  page?: number;
  limit?: number;
  collection?: number;
};

export async function getQuestions(params: GetQuestionsParams = {}) {
  const response = await apiInstance.get<PaginatedResponse<Question>>(
    "/questions/public-questions",
    { params },
  );

  return response.data;
}
