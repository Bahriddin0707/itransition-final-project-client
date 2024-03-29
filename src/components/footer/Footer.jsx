import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white dark:bg-black h-[80px] border-t-[1px] border-b-[1px] border-green-500 z-10">
      <div className="container">
        <div className="footer-box flex justify-center items-center h-[80px]">
          <p className="text-black max-sm:w-3/4 max-sm:text-center">
            {t("footer.title")}{" "}
            <Link
              className="underline text-blue-500"
              to="https://bahriddin-programmer.netlify.app/"
            >
              Bahriddin Boltayev
            </Link>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
