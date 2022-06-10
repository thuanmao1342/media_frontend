import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./footer.module.scss";

function Footer() {
  const [t] = useTranslation("layout");
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footer__addr}>
          <h1 className={styles.footer__logo}>mèo méo meo mèo meo</h1>
          <h2>{t("layout:footer.contact.title")}</h2>
          <address>
            <div className={styles.social}>
              <div className={styles.flex_center}>
                <i className={`${styles.icon_3d}`}>facebook</i>
                <i className={`${styles.icon_3d}`}>tweter</i>
                <i className={`${styles.icon_3d}`}>instagram</i>
                <i className={`${styles.icon_3d}`}>youtube</i>
              </div>
            </div>
            <br />
            <a
              className={styles.footer__btn}
              href="mailto:thuanmao1342@gmail.com"
            >
              {t("layout:footer.contact.email")}
            </a>
          </address>
        </div>

        <ul className={styles.footer__nav}>
          <li className={styles.nav__item}>
            <h2 className={styles.nav__title}>{t("layout:footer.media.title")}</h2>

            <ul className={styles.nav__ul}>
              <li>
                <a href="!#">{t("layout:footer.media.online")}</a>
              </li>

              <li>
                <a href="!#">{t("layout:footer.media.print")}</a>
              </li>

              <li>
                <a href="!#">{t("layout:footer.media.alternative_ads")}</a>
              </li>
            </ul>
          </li>

          <li className={[styles.nav__item, styles.nav__item__extra].join(" ")}>
            <h2 className={styles.nav__title}>{t("layout:footer.technology.title")}</h2>

            <ul className={[styles.nav__ul, styles.nav__ul__extra].join(" ")}>
              <li>
                <a href="!#">{t("layout:footer.technology.title")}</a>
              </li>

              <li>
                <a href="!#">{t("layout:footer.technology.title")}</a>
              </li>

              <li>
                <a href="!#">{t("layout:footer.technology.title")}</a>
              </li>

              <li>
                <a href="!#">{t("layout:footer.technology.title")}</a>
              </li>

              <li>
                <a href="!#">{t("layout:footer.technology.title")}</a>
              </li>

              <li>
                <a href="!#">{t("layout:footer.technology.title")}</a>
              </li>
            </ul>
          </li>

          <li className={styles.nav__item}>
            <h2 className={styles.nav__title}>
              {t("layout:footer.legal.title")}
            </h2>

            <ul className={styles.nav__ul}>
              <li>
                <a href="!#">{t("layout:footer.legal.privacy_policy")}</a>
              </li>

              <li>
                <a href="!#">{t("layout:footer.legal.terms_of_use")}</a>
              </li>

              <li>
                <a href="!#">{t("layout:footer.legal.sitemap")}</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className={styles.legal}>
          <p>&copy;2022 thuan. All rights reserved.</p>

          <div className={styles.legal__links}>
            <span>
              Made with <span className={styles.heart}>♥</span> remotely from
              Anywhere
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
