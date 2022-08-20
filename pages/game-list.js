import HomeNav from "../components/navbar/HomeNav";
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { playedGames } from "../features/authSlice";
import { useDispatch } from "react-redux";
import Link from 'next/link';

function GameList() {

  const dispatch = useDispatch();

  return (
    <>
      <HomeNav />
      <br />
      <Container>
        <ListGroup>
          <ListGroupItem active tag="button" action>Game list</ListGroupItem>
          <ListGroupItem tag="button" action>
            <Link href="/rock-paper-scissors">
              <a className="text-body text-decoration-none" onClick={() => dispatch(playedGames())}>Rock Paper Scissors</a>
            </Link>
          </ListGroupItem>
          <ListGroupItem disabled tag="button" action>Snake</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Chess</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Solitaire</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Crash Team Racing</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Tetris</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Attack on Titan 2</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Batman Arkham City</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Call of Duty</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Devil May Cry</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Dragon Ball</ListGroupItem>
          <ListGroupItem disabled tag="button" action>F1 2016</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Pes 2013</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Pes 2016</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Fifa 22</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Smackdown</ListGroupItem>
          <ListGroupItem disabled tag="button" action>Fornite</ListGroupItem>
        </ListGroup>
      </Container>
    </>
  );
}

export default GameList;
