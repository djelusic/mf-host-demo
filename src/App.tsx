import React from "react";
import ReactDOM from "react-dom";

import { Header } from "mf-lib-poc-remote/Header";
import { Footer } from "mf-lib-poc";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="flex justify-center items-center h-96">Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
