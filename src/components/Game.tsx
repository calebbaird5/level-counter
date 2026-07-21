import { useGameContext, type Player } from "@/contexts/game.context";
import PlayerCard from "./PlayerCard";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  DragDropProvider,
  useDroppable,
  type DragEndEvent,
} from "@dnd-kit/react";
import type { ComponentProps } from "react";
import { isSortable } from "@dnd-kit/react/sortable";

const rails = [
  {
    className: "top-0 left-0 right-0 h-[var(--card-height)] rotate-180",
    id: "top",
  },
  { className: "bottom-0 left-0 right-0 h-[var(--card-height)]", id: "bottom" },
  {
    className:
      "top-[var(--card-height)] left-0 w-[calc(100vh-var(--card-height)*2)] h-[var(--card-height)] origin-top-left rotate-90 translate-x-[var(--card-height)]",
    id: "left",
  },

  {
    className:
      "top-[var(--card-height)] right-0 w-[calc(100vh-var(--card-height)*2)] h-[var(--card-height)] origin-top-right -rotate-90 -translate-x-[var(--card-height)]",
    id: "right",
  },
];

export default function Game() {
  const { addPlayer, setPlayers } = useGameContext();

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.canceled) return;

    const { source, target } = event.operation;
    const playerId = source?.id as string;
    const targetRail = target?.id as Player["rail"];

    setPlayers((players) => {
      const next = players.map((player) =>
        player.id === playerId ? { ...player, rail: targetRail } : player,
      );

      return next;
    });
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <div className="[--card-height:218px]">
        {rails.map(({ className, id }, i) => (
          <Rail key={i} className={className} id={id} />
        ))}

        <Button
          variant="ghost"
          onClick={() => addPlayer()}
          className="w-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Add Player
        </Button>
      </div>
    </DragDropProvider>
  );
}

interface RailProps extends ComponentProps<"div"> {
  id: string;
}
function Rail({ className, id, ...props }: RailProps) {
  const { isDropTarget, ref } = useDroppable({ id });

  const { players } = useGameContext();

  return (
    <div
      ref={ref}
      className={cn(
        className,
        "absolute flex justify-around items-center transform-gpu",
        { "bg-primary-subtle": isDropTarget },
      )}
      {...props}
    >
      {players
        .filter((player) => player.rail === id)
        .map((player, i) => (
          <PlayerCard key={player.id} player={player} index={i} />
        ))}
    </div>
  );
}
