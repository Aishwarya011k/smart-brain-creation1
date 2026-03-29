import GameLayout from '../../components/GameLayout';
import GameContact from '../../components/game/Gamepages/GameContact/GameContact';

export default function GameContactPage() {
  return (
    <GameLayout pathname="/gamezone/contact">
      <GameContact />
    </GameLayout>
  );
}