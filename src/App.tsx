import React from "react";
import { createRoot } from "react-dom/client";

import { Header } from "mf-lib-poc";
import { Footer } from "mf-lib-poc";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="flex justify-center items-center h-96">Content</div>
    <Footer />
  </div>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);
