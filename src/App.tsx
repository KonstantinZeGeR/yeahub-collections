import { Route, Routes } from "react-router-dom";
import { CollectionsPage } from "./pages/CollectionsPage/CollectionsPage";
import { CollectionDetailPage } from "./pages/CollectionDetailPage/CollectionDetailPage";
import { QuestionDetailPage } from "./pages/QuestionDetailPage/QuestionDetailPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<CollectionsPage />} />
      <Route
        path="/collections/:collectionId"
        element={<CollectionDetailPage />}
      />
      <Route path="/questions/:questionId" element={<QuestionDetailPage />} />
    </Routes>
  );
}
