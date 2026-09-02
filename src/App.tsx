import { Route, Routes } from "react-router-dom";
import { CollectionsPage } from "./pages/CollectionsPage/CollectionsPage";
import { CollectionDetailPage } from "./pages/CollectionDetailPage/CollectionDetailPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<CollectionsPage />} />
      <Route
        path="/collections/:collectionId"
        element={<CollectionDetailPage />}
      />
    </Routes>
  );
}
