import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import vi from "./assets/i18n/vi/vi.json";
import en from "./assets/i18n/en/en.json";
import enlayout from "./assets/i18n/en/layout.json";
import vilayout from "./assets/i18n/vi/layout.json";
import cten from "./assets/i18n/en/content.json";
import ctvi from "./assets/i18n/vi/content.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: en,
      layout: enlayout,
      content: cten,
    },
    vi: {
      common: vi,
      layout: vilayout,
      content: ctvi,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
