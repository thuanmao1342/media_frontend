import { useEffect } from "react";
import "./App.css";

import { useTranslation } from "react-i18next";
import CustomRouter from "./layout/CustomRouter";

function App() {
  const { t, i18n } = useTranslation("common");
  const language = localStorage.getItem("LANGUAGE");
  const getLanguage = () => {
    if (language) {
      i18n.changeLanguage(language);
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("LANGUAGE", "en");
    }
  };

  useEffect(() => {
    document.title = t("common:app_name");
    getLanguage();
    // const fetchUsers = async () => {
    //   try {
    //     const response = await userServie.getAll();
    //     console.log("Fetch products successfully: ", response);
    //   } catch (error) {
    //     console.log("Failed to fetch product list: ", error);
    //   }
    // };
    // fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <CustomRouter />
    </div>
  );
}

export default App;
