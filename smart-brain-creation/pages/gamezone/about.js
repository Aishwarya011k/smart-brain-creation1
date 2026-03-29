import GameLayout from '../../components/GameLayout';
import Gameabout from '../../components/game/Gamepages/GameAbout/Gameabout';

export default function GameAboutPage() {
  return (
    <GameLayout pathname="/gamezone/about">
      <Gameabout />
    </GameLayout>
  );
}