import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

export interface Player {
  id: string;
  name: string;
  level: number;
  bonuses: number;
  modifiers: number;
  rail: "left" | "right" | "top" | "bottom";
}

export interface GameContextType {
  playersState: [Player[], Dispatch<SetStateAction<Player[]>>];
}

export const GameContext = createContext<GameContextType>({
  playersState: [[], () => {}],
});

export function useGameContext() {
  const {
    playersState: [players, setPlayers],
  } = useContext(GameContext);

  const addPlayer = (player?: Omit<Player, "id">) => {
    const playersByRail: Record<Player["rail"], Player[]> = players.reduce(
      (acc, player) => ({
        ...acc,
        [player.rail]: [...acc[player.rail], player],
      }),
      { left: [], right: [], top: [], bottom: [] },
    );

    const smallestRail = (
      Object.keys(playersByRail) as Player["rail"][]
    ).reduce(
      (smallest, rail) =>
        playersByRail[rail].length < playersByRail[smallest].length
          ? rail
          : smallest,

      "bottom",
    );

    const defaultPlayer = {
      name: `Player ${players.length + 1}`,
      level: 1,
      bonuses: 0,
      modifiers: 0,
      rail: smallestRail,
    };

    const newPlayer = {
      ...defaultPlayer,
      ...(player ?? {}),
      id: crypto.randomUUID(),
    };

    setPlayers((prev) => [...prev, newPlayer]);
  };

  const patchPlayer = (player: Player) => {
    setPlayers((prev) =>
      prev.map((el) => (el.id !== player.id ? el : { ...el, ...player })),
    );
  };

  const adjustStats = (
    key: "bonuses" | "level" | "modifiers",
    id: string,
    delta: number,
    min?: number,
  ) => {
    const player = players.find((el) => el.id === id);
    if (!player) throw new Error("Invalid Player id: " + id);
    patchPlayer({
      ...player,
      [key]: Math.max(min ?? -Infinity, player[key] + delta),
    });
  };

  return {
    players,
    setPlayers,
    addPlayer,
    patchPlayer,
    adjustBonuses: (id: string, delta: number) =>
      adjustStats("bonuses", id, delta, 0),
    adjustLevel: (id: string, delta: number) =>
      adjustStats("level", id, delta, 1),
    adjustModifiers: (id: string, delta: number) =>
      adjustStats("modifiers", id, delta),
  };
}

export function getCombatAbility(player: Player) {
  return player.level + player.bonuses + player.modifiers;
}
