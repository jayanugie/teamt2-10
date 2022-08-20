import HomeNav from "../components/navbar/HomeNav";
import Footer from "../components/footer/Footer";
import style from "../styles/Home.module.css";
import Carousel from "../components/carousel/carousel";
import PlayedGames from "../components/reduxFeatures/PlayedGames";
import { useDispatch } from "react-redux";
import { playedGames } from "../features/authSlice";
import { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import Image from "next/image";
import Link from "next/link";

function Home() {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [randomScoreWin, setRandomScoreWin] = useState(0);
  const [randomScoreLost, setRandomScoreLost] = useState(0);

  const randomScore = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const toggle = () => {
    setModal(!modal);
    setRandomScoreWin(randomScore(1, 20));
    setRandomScoreLost(randomScore(1, 20));
  };

  return (
    <>
      <HomeNav />
      {/* <Carousel /> */}
      <div className="text-center">
        <h1 className="m-3">TOP GAMES</h1>
        <div className="m-4">
          <p>
            Our games include Rock Paper Scissors, Snake, Chess, Solitaire,
            Tetris, etc.
            <br />
            Which have generated more than 10 million downloads. We have unique
            understanding of the digital games
            <br />
            space, connecting more than 5 million active daily players
            worldwide.
          </p>
        </div>
      </div>
      <div className={style["container-fluid"]}>
        {/* 1 */}
        <div className={`card ${style.game}`}>
          <Image
            src="/img/home/rock-paper-scissors.jpg"
            className={`card-img-top ${style["img-game"]}`}
            alt="rock paper scissor"
            width={500}
            height={300}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Rock Paper Scissor</h5>
            <p className="card-text">
              Rock-Paper-Scissors is a two-person hand game. This game is often
              used for random selection. The players choose one{" "}
              {`(eg, "Rock! Paper! Scissors!")`}. Each player holds out their
              fist for rock, flat hand for paper, or their index and middle
              finger for scissors. Rock crushes scissors, scissors cut paper,
              and paper covers rock. See who wins each round!
              <br />
              <br />
            </p>
            <PlayedGames />
            <Link href="/rock-paper-scissors">
              <a
                className={`btn btn-primary ${style.button}`}
                onClick={() => dispatch(playedGames())}
              >
                Play Now
              </a>
            </Link>
          </div>
        </div>

        {/* 2 */}

        <div className={`card ${style.game}`}>
          <Image
            src="/img/home/snake-game.jpg"
            className={`card-img-top ${style["img-game"]}`}
            alt="snake"
            width={500}
            height={300}
          />
          <div className="card-body  d-flex flex-column">
            <h5 className="card-title">Snake</h5>
            <p className="card-text">
              The player controls a long, thin creature, resembling a snake,
              which roams around on a bordered plane, picking up food, trying to
              avoid hitting its own tail or the edges of the playing area. Each
              time the snake eats a piece of food, its tail grows longer, making
              the game increasingly difficult.
            </p>
            <a onClick={toggle} className={`btn btn-primary ${style.button}`}>
              Play Now
            </a>
          </div>
        </div>

        {/* 3 */}

        <div className={`card ${style.game}`}>
          <Image
            src="/img/home/chess.jpg"
            className={`card-img-top ${style["img-game"]}`}
            alt="snake"
            width={500}
            height={300}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Chess</h5>
            <p className="card-text">
              Chess is one of the oldest and most popular board games. It is
              played by two opponents on a checkered board with specially
              designed pieces of contrasting colours, commonly white and black.
              The objective of the game is to capture the opponent&apos;s king.
            </p>
            <a onClick={toggle} className={`btn btn-primary ${style.button}`}>
              Play Now
            </a>
          </div>
        </div>

        {/* 4 */}

        <div className={`card ${style.game}`}>
          <Image
            src="/img/home/solitaire.jpg"
            className={`card-img-top ${style["img-game"]}`}
            alt="snake"
            width={500}
            height={300}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Solitaire</h5>
            <p className="card-text">
              Patience, card solitaire or solitaire, is a genre of card games
              whose common feature is that the aim is to arrange the cards in
              some systematic order.
              <br />
              <br />
            </p>
            <a onClick={toggle} className={`btn btn-primary ${style.button}`}>
              Play Now
            </a>
          </div>
        </div>

        {/* 5 */}
        <div className={`card ${style.game}`}>
          <Image
            src="/img/home/ctr.jpg"
            className={`card-img-top ${style["img-game"]}`}
            alt="snake"
            width={500}
            height={300}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Crash Team Racing</h5>
            <p className="card-text">
              The game&apos;s story focuses on the efforts of Crash Bandicoot, Doctor
              Neo Cortex, who must race against the egomaniacal Nitros Oxide to
              save the Earth from destruction.
              <br />
              <br />
            </p>
            <a onClick={toggle} className={`btn btn-primary ${style.button}`}>
              Play Now
            </a>
          </div>
        </div>

        {/* 6 */}
        <div className={`card ${style.game}`}>
          <Image
            src="/img/home/tetris.jpg"
            className={`card-img-top ${style["img-game"]}`}
            alt="snake"
            width={500}
            height={300}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Tetris</h5>
            <p className="card-text">
              The goal of the game is to prevent the blocks from stacking up to
              the top of the screen for as long as possible.
              <br />
              <br />
            </p>
            <a onClick={toggle} className={`btn btn-primary ${style.button}`}>
              Play Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
      {/* MODAL RANDOM SCORE */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 100 }}
        style={{
          width: 100,
        }}
      >
        <ModalBody>
          Win: {randomScoreWin} Lost: {randomScoreLost}
        </ModalBody>
      </Modal>
    </>
  );
}

export default Home;
