import { apiInstance } from "../instance";
import type { PaginatedResponse } from "../../types/api";
import type { Collection } from "../../types/collection";

type GetCollectionsParams = {
  page?: number;
  limit?: number;
  titleOrDescriptionSearch?: string;
  specializations?: number[];
  isFree?: boolean;
};

export const getCollections = async (params: GetCollectionsParams = {}) => {
  const response = await apiInstance.get<PaginatedResponse<Collection>>(
    "/collections/public",
    { params }, // axios сам соберёт ?page=1&limit=10
  );

  return response.data; // весь конверт: { data, page, limit, total }
};
