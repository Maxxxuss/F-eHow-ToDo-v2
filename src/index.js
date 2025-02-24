// Falls Polyfills über Webpack eingebunden sind, können diese Zeilen entfernt werden.
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotesDashboardPage from "./components/NotesDashboard";
import ProjectDashboard from "./components/ProjectDash/ProjectDashboard";
import DocumentDash from "./components/noteDocs/DocumentDash/documentDash";
import store from "./store/configureStore";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<NotesDashboardPage />} />
        <Route path="/proDash" element={<ProjectDashboard />} />
        <Route path="/documentDash" element={<DocumentDash />} />
      </Routes>
    </Router>
  </Provider>
);
