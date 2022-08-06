import { useRouter } from "next/router";
import style from "../styles/Game.module.css";

function PlayGame() {
    const router = useRouter();
  
    function game() {
        router.push("/rock-paper-scissors");
    }
  
    function backToHome() {
        router.push("/home");
    }
  
    return (
      <div className={style["play-game"]}>
        <div className="container text-center d-flex vh-100">
          <div className="mx-auto my-auto col-8">
            <button onClick={game} className={`btn btn-success ${style.button}`}>
              Play Game
            </button>
            <br />
            <br />
            <button onClick={backToHome} className={`btn btn-dark ${style.button}`}>
              Back to home
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default PlayGame;
  