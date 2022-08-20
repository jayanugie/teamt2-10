import LandingNav from "../components/navbar/LandingNav.js";
import { Card, CardImg } from "reactstrap";
import style from "../styles/Landing.module.css";
import Footer from "../components/footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <div>
        <LandingNav />
        {/* CardImg */}
        <Card className="header1">
          <CardImg
            src="/img/fornite.jpg"
            alt="Card image cap"
          />
        </Card>
      </div>
      {/* Navbar */}

      {/* Main */}
      <div className={style.main}>
        <div className={`container-xxl mx-auto p-0 position-relative ${style['content-2-4']}`}>
        {/* , "content-2-4 container-xxl mx-auto p-0 position-relative "} */}
          <div className={`text-center ${style['title-text']}`}>
            <h1 className={`text-white ${style['text-title']}`}>3 Reasons To Play It</h1>
            <p className={style['text-caption']}>
              You will get an amazing gaming experience:
            </p>
          </div>
          <div className={`text-center ${style['grid-padding']}`}>
            <div className="row">
              <div className={`col-lg-4 ${style.column}`} >
                <div className={style.icon}>
                  <Image src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-11.png"
                    alt=""
                    width={70}
                    height={70} />
                </div>
                <h3 className={`text-white ${style['icon-title']}`}>Easy to Operate</h3>
                <p className={style['icon-caption']}>
                  Easily access games<br />
                </p>
              </div>
              <div className={`col-lg-4 ${style.column}`}>
                <div className={style.icon}>
                  <Image src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-12.png"
                    alt="" 
                    width={70}
                    height={70} />
                </div>
                <h3 className={`text-white ${style['icon-title']}`}>Light</h3>
                <p className={style['icon-caption']}>
                  With the lightness of the game,<br />
                  you will get a smooth gaming experience
                </p>
              </div>
              <div className={`col-lg-4 ${style.column}`}>
                <div className={style.icon}>
                  <Image src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-13.png"
                    alt="" 
                    width={70}
                    height={70} />
                </div>
                <h3 className={`text-white ${style['icon-title']}`}>Free</h3>
                <p className={style['icon-caption']}>
                  Enjoy a variety of games that<br />
                  interest you for free
                </p>
              </div>
            </div>
          </div>
          <div className={style['card-block']}>
            <div className={style.card}>
              <div className="d-flex flex-lg-row flex-column align-items-center">
                <div className="me-lg-3">
                  <Image
                    src="/img/gaming.jpg"
                    alt="Logo"
                    width={100}
                    height={100} />
                </div>
                <div className={`flex-grow-1 text-lg-start text-center ${style['card-text']}`}>
                  <h3 className={`text-white ${style['card-title']}`}>
                    Team T2
                  </h3>
                  <p className={style['card-caption']}>
                    Team T2 is Indonesian game developer company that has been active since July 2020, <br /> with team consisting of passionate people.
                    <br className="d-none d-lg-block " />
                    A game studio that provides a variety of games with various genres.
                  </p>
                </div>
                <div className="card-btn-space">
                  <button className={`btn ${style['btn-card']}`}>SEE MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* End Main */}



    </>


  )
}
