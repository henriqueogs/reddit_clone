import { Icon } from "@iconify/react";
import Logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogoData}>
            <div className={styles.footerLogoImg}>
              <img src={Logo} alt="logo" className={styles.footerLogo} />
            </div>
            <div className={styles.footerLogoInfo}>
              <span className={styles.footerLogoCompany}> The UX Library </span>
              <br />
              <span className={styles.footerLogoCaption}>
                {" "}
                Community curated design content & discussion{" "}
              </span>
            </div>
          </div>
          <div className={styles.footerSocialMidiaInfo}>
            <div className={styles.footerSocialMidiaItem}>
              <a href="https://www.facebook.com/theuxlibrary">
                <Icon
                  icon="el:facebook"
                  className={styles.footerFacebookIcon}
                />
              </a>
              <span className={styles.footerSocialMediaText}>Facebook</span>
            </div>
            <div className={styles.footerSocialMidiaItem}>
              <a href="https://www.twitter.com/">
                <Icon
                  icon="fa:twitter-square"
                  className={styles.footerTwitterIcon}
                />
              </a>
              <span className={styles.footerSocialMediaText}>Twitter</span>
            </div>
            <div>
              <Icon className={styles.footerInterpunct} icon="ci:dot-03-m" />
            </div>
            <div className={styles.footerOthers}>
              <div className={styles.footerInfo}>
                <span className={styles.footerLink}>About</span>
                <span className={styles.footerLink}>Contact</span>
                <span className={styles.footerLink}>Sign in</span>
              </div>
              <div className={styles.footerCopyright}>
                <span>© 2014 - The UX Library</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}