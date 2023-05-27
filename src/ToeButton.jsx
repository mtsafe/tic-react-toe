import { ToeImg } from "./ToeImg"

export function ToeButton({
  letter,
  toe_id,
  playerSelected = { playerSelected },
}) {
  return (
    <button
      toe_id={toe_id}
      letter={letter}
      onClick={e => playerSelected(toe_id, e.target)}
    >
      <ToeImg letter={letter} />
    </button>
  )
}
