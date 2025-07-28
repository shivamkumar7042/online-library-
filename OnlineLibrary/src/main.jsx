import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "../Components/Home.jsx";
import Search from "../Components/Search.jsx";
import AddNew from "../Components/AddNew.jsx";
import Bookdesc from "../Components/Bookdesc.jsx";
import Error from "../Components/Error.jsx";
import Category from "../Components/CategoryPage.jsx";
import { Provider } from "react-redux";
import { store } from "../utils/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="book/:id" element={<Bookdesc />} />
            <Route path="Search/:category" element={<Category />} />
            <Route path="Search" element={<Search />} />
            <Route path="AddNew" element={<AddNew />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </Provider>
  </StrictMode>
);