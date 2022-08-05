import style from "../../styles/Footer.module.css";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <div className={style.all}>
      <footer className={style.footer}>
        <div className={style["footer-wrapper"]}>
          <div className={style.container}>
            <div className={style.parent}>
              {/* about us */}
              <div className={style["footer-col"]}>
                <h4 className={style.title}>company</h4>
                <ul className={style.list}>
                  <li className={style.li}>
                    <a href="#" className={style.detail}>about us</a>
                  </li>
                </ul>
              </div>
              {/* get help */}
              <div className={style["footer-col"]}>
                <h4 className={style.title}>get help</h4>
                <ul className={style.list}>
                  <li className={style.li}>
                    <a href="#" className={style.detail}>FAQ</a>
                  </li>
                </ul>
              </div>
              {/* social links */}
              <div className={style["footer-col"]}>
                <h4 className={style.title}>follow us</h4>
                <div className={style["social-links"]}>
                  <a href="https://www.facebook.com/" type="button" className={style.detail}>
                    <FaFacebookF />{" "}
                  </a>
                  <a href="https://twitter.com/" type="button" className={style.detail}>
                    <FaTwitter />{" "}
                  </a>
                  <a href="https://www.google.com/" type="button" className={style.detail}>
                    <FaGoogle />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
