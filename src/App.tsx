import { useEffect, useState } from "react";
import { GameContext, type Player } from "./contexts/game.context";
import Game from "./components/Game";

function App() {
  useEffect(() => {
    const root = document.documentElement;

    const style = getComputedStyle(root);
    const backgroundColor = style.getPropertyValue("--background-color");
    const meta = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]',
    );
    if (meta) {
      meta.setAttribute("content", backgroundColor);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "apple-mobile-web-app-status-bar-style");
      newMeta.setAttribute("content", backgroundColor);
      document.head.appendChild(newMeta);
    }
  }, []);

  const playersState = useState<Player[]>([]);

  return (
    <GameContext value={{ playersState }}>
      <div className="w-screen h-screen bg-background relative">
        <Game />
      </div>
    </GameContext>
  );
}

export default App;
