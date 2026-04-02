import GameLayout from '../../components/GameLayout';
import Gamezone from '../../components/game/Gamepages/GameHome/Gamezone';

export default function GamezonePage() {
  return (
    <GameLayout pathname="/gamezone">
      <Gamezone />
    </GameLayout>
  );
}