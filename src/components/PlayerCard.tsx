import {
  getCombatAbility,
  useGameContext,
  type Player,
} from "@/contexts/game.context";
import Card, { type CardProps } from "./Card";
import { Input } from "./ui/input";
import { Cog, Minus, Plus, Shield, Sword } from "lucide-react";
import { Button } from "./ui/button";
import { useSortable } from "@dnd-kit/react/sortable";

export interface PlayerCardProps extends CardProps {
  player: Player;
  index: number;
}
export default function PlayerCard({
  player,
  className,
  index,
  ...props
}: PlayerCardProps) {
  const { patchPlayer, adjustBonuses, adjustLevel, adjustModifiers } =
    useGameContext();

  const { ref } = useSortable({ id: player.id, index });
  return (
    <Card
      ref={ref}
      variant="door"
      className={className}
      contentClassName="flex flex-col justify-start gap-1"
      {...props}
    >
      <div className="relative flex justify-center items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => adjustLevel(player.id, -1)}
          className="absolute text-transparent left-0"
        >
          <Minus />
        </Button>
        <p className="text-center text-sm">level: {player.level}</p>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => adjustLevel(player.id, 1)}
          className="absolute text-transparent right-0"
        >
          <Plus />
        </Button>
      </div>

      <Input
        variant="underline"
        value={player.name}
        onChange={(e) => patchPlayer({ ...player, name: e.target.value })}
        className="bg-transparent text-center pb-0 h-7 mb-0"
      />

      <div className="flex gap-2 text-2xl justify-center items-center">
        <Sword className="w-5 scale-x-[-1]" />
        {getCombatAbility(player)}
        <Sword className="w-5" />
      </div>

      <div className="relative flex justify-center items-center gap-1">
        <Shield className="absolute size-9" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => adjustBonuses(player.id, -1)}
        >
          <Minus />
        </Button>
        <span className="z-10 size-5.5 text-center">{player.bonuses}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => adjustBonuses(player.id, 1)}
        >
          <Plus />
        </Button>
      </div>

      <div className="relative flex justify-center items-center gap-1">
        <Cog className="absolute size-9" />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => adjustModifiers(player.id, -1)}
        >
          <Minus />
        </Button>
        <span className="bg-white z-10 rounded-full size-5.5 text-center">
          {player.modifiers}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => adjustModifiers(player.id, 1)}
        >
          <Plus />
        </Button>
      </div>
    </Card>
  );
}
