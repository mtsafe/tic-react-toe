import { ToeButton } from "./ToeButton"

export function GameBoard({ toes, playerSelected }) {
  console.log("GameBoard()")
  return (
    <div className="game-board">
      {toes.map(toe => {
        return (
          <ToeButton
            {...toe}
            key={toe.toe_id}
            toe_id={toe.toe_id}
            letter={toe.letter}
            playerSelected={playerSelected}
          />
        )
      })}
    </div>
  )
}
