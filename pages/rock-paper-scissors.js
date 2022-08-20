import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import style from "../styles/Game.module.css";
import { useDispatch, useSelector } from "react-redux";

import { win, lost } from "../features/authSlice";

import Image from "next/image";
import Link from "next/link";

function RockPaperScissors() {
  const router = useRouter();

  const { username } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (username == true) {
      alert("Please login first!");
      router.push("/login");
    }
  });

  class Game {
    randomize() {
      const choices = ["rock", "paper", "scissor"];
      const index = Math.floor(Math.random() * 3);
      return choices[index];
    }

    playGame(playerChoice) {
      this.resetBackground();

      console.log(`Player memilih ${playerChoice}`);
      this.setBackground("player", playerChoice);

      const comChoice = this.randomize();
      console.log(`COM memilih ${comChoice}`);
      this.setBackground("com", comChoice);

      if (playerChoice === comChoice) {
        return this.resultDraw();
      }

      if (playerChoice === "rock" && comChoice === "paper") {
        return this.resultPlayerLose();
      }

      if (playerChoice === "rock" && comChoice === "scissor") {
        return this.resultPlayerWin();
      }

      if (playerChoice === "paper" && comChoice === "scissor") {
        return this.resultPlayerLose();
      }

      if (playerChoice === "paper" && comChoice === "rock") {
        return this.resultPlayerWin();
      }

      if (playerChoice === "scissor" && comChoice === "rock") {
        return this.resultPlayerLose();
      }

      if (playerChoice === "scissor" && comChoice === "paper") {
        return this.resultPlayerWin();
      }
    }

    setBackground(playerType, choice) {
      const selectedElement = document.getElementById(
        `${playerType}-${choice}`
      );

      selectedElement.classList.add(style["custom-selected"]);
    }

    resetBackground() {
      document
        .getElementById("player-rock")
        .classList.remove(style["custom-selected"]);
      document
        .getElementById("player-paper")
        .classList.remove(style["custom-selected"]);
      document
        .getElementById("player-scissor")
        .classList.remove(style["custom-selected"]);
      document
        .getElementById("com-rock")
        .classList.remove(style["custom-selected"]);
      document
        .getElementById("com-paper")
        .classList.remove(style["custom-selected"]);
      document
        .getElementById("com-scissor")
        .classList.remove(style["custom-selected"]);

      document
        .getElementById("vs")
        .classList.remove(style["custom-green-vs-box"]);
      document
        .getElementById("vs")
        .classList.remove(style["custom-green-darker-vs-box"]);

      document.getElementById("vs").innerHTML = "VS";
      document.getElementById("vs").classList.add(style["custom-vs-text"]);
    }

    resultDraw() {
      console.log("DRAW");

      const vsElement = document.getElementById("vs");
      vsElement.innerHTML = "DRAW";
      vsElement.classList.remove(style["custom-vs-text"]);
      vsElement.classList.add(style["custom-green-darker-vs-box"]);
    }

    resultPlayerLose() {
      console.log("COM WIN");

      const vsElement = document.getElementById("vs");
      vsElement.innerHTML = "COM WIN";
      vsElement.classList.remove(style["custom-vs-text"]);
      vsElement.classList.add(style["custom-green-vs-box"]);
      dispatch(lost());
    }

    resultPlayerWin() {
      console.log("PLAYER WIN");

      const vsElement = document.getElementById("vs");
      vsElement.innerHTML = "PLAYER 1 WIN";
      vsElement.classList.remove(style["custom-vs-text"]);
      vsElement.classList.add(style["custom-green-vs-box"]);
      dispatch(win());
    }
  }

  const game = new Game();

  function rock() {
    game.playGame("rock");
  }

  function paper() {
    game.playGame("paper");
  }

  function scissor() {
    game.playGame("scissor");
  }

  function resetGame() {
    console.log("--- GAME RESET --- ");
    game.resetBackground();
  }

  const [modal, setModal] = React.useState(false);
  const [tampil, setTampil] = React.useState(false);
  const winScore = useSelector((state) => state.auth.win);
  const lostScore = useSelector((state) => state.auth.lost);
  const toggle = () => {
    setModal(!modal);
    setTampil(!tampil);
  };

  return (
    <div className={style.body}>
      <div className="container-fluid mt-3">
        <div className="row align-items-center">
          <div
            className={`col-1 fs-1 fw-bolder text-end ${style["custom-back-button"]}`}
          >
            <Link href="/home">
              <a className="text-reset text-decoration-none">&lt;</a>
            </Link>
          </div>

          <div className="col-1 text-center">
            <Image
              src="/img/game/logo.png"
              className={style["custom-logo"]}
              alt="logo"
              width={60}
              height={60}
            />
          </div>

          <div className={`col fs-2 fw-bold ${style["custom-game-title"]}`}>
            ROCK PAPER SCISSOR
          </div>

          {/* MODAL */}
          <div
            style={{
              display: "block",
              width: 700,
              padding: 30,
            }}
          >
            <Button color="danger" onClick={toggle}>
              Score
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Score</ModalHeader>
              <ModalBody>
                <Table>
                  {tampil && (
                    <>
                      <thead>
                        <tr>
                          <th>Player</th>
                          <th>Win</th>
                          <th>Lost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{username}</td>
                          <td>{winScore}</td>
                          <td>{lostScore}</td>
                        </tr>
                      </tbody>
                    </>
                  )}
                </Table>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Okay
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>

      <div className={`container text-center ${style["custom-game-section"]}`}>
        <div className="row my-3 justify-content-center align-items-center">
          <div
            className={`col-2 fs-4 fw-bold ${style["custom-game-player-name"]}`}
          >
            PLAYER 1
          </div>

          <div className="col-2"></div>

          <div
            className={`col-2 fs-4 fw-bold ${style["custom-game-player-name"]}`}
          >
            COM
          </div>
        </div>

        <div className="row my-5 justify-content-center align-items-center">
          <div
            className={`col-2 align-items-center ${style["custom-choice-background"]}`}
            id="player-rock"
            onClick={rock}
          >
            <Image
              className={style["custom-choice"]}
              src="/img/game/batu.png"
              alt="player-rock"
              width={70}
              height={70}
            />
          </div>

          <div className="col-2"></div>

          <div
            className={`col-2 ${style["custom-choice-background"]}`}
            id="com-rock"
          >
            <Image
              className={style["custom-choice"]}
              src="/img/game/batu.png"
              alt="com-rock"
              width={70}
              height={70}
            />
          </div>
        </div>

        <div className="row my-5 justify-content-center align-items-center">
          <div
            className={`col-2 ${style["custom-choice-background"]}`}
            id="player-paper"
            onClick={paper}
          >
            <Image
              className={style["custom-choice"]}
              src="/img/game/kertas.png"
              alt="player-paper"
              width={70}
              height={70}
            />
          </div>

          <div
            className={`col-2 mx-2 fw-bold ${style["custom-vs-background"]} ${style["custom-vs-text"]}`}
            id="vs"
          >
            VS
          </div>

          <div
            className={`col-2 ${style["custom-choice-background"]}`}
            id="com-paper"
          >
            <Image
              className={style["custom-choice"]}
              src="/img/game/kertas.png"
              alt="com-paper"
              width={70}
              height={70}
            />
          </div>
        </div>

        <div className="row my-5 justify-content-center align-items-center">
          <div
            className={`col-2 ${style["custom-choice-background"]}`}
            id="player-scissor"
            onClick={scissor}
          >
            <Image
              className={style["custom-choice"]}
              src="/img/game/gunting.png"
              alt="player-scissor"
              width={70}
              height={70}
            />
          </div>

          <div className="col-2"></div>

          <div
            className={`col-2 ${style["custom-choice-background"]}`}
            id="com-scissor"
          >
            <Image
              className={style["custom-choice"]}
              src="/img/game/gunting.png"
              alt="com-scissor"
              width={70}
              height={70}
            />
          </div>
        </div>

        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-2"></div>

          <div className="col-2" id="reset" onClick={resetGame}>
            <Image
              className={style["custom-choice"]}
              src="/img/game/refresh.png"
              alt="refresh"
              width={70}
              height={70}
            />
          </div>

          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default RockPaperScissors;
