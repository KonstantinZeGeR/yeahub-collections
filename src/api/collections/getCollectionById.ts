import type { Collection } from "../../types/collection";
import { apiInstance } from "../instance";

export async function getCollectionById(id: number) {
  const response = await apiInstance.get<Collection>(
    `/collections/${id}/public`,
  );

  return response.data;
}
