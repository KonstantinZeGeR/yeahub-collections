import { Route, Routes } from "react-router-dom";
import { CollectionsPage } from "./pages/CollectionsPage/CollectionsPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<CollectionsPage />} />
    </Routes>
  );
}
