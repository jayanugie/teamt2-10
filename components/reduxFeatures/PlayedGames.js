import { useSelector } from "react-redux";

const PlayedGames = () => {
  const isPlayedGames = useSelector((state) => state.auth.playedGames);

  return (
    <>
      { isPlayedGames ? (
          <p className="m-2 fst-italic text-secondary">
            Already Played, Play Again!
          </p>
      ) : ( 
          <p className="m-2">

          </p>
      )}
    </>
  );
};

export default PlayedGames;
