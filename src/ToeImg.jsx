import BigO from "./assets/LetterO100x100.png"
import BigX from "./assets/LetterX100x100.png"
import Empty from "./assets/Transparent100x100.png"

export function ToeImg({ letter }) {
  if (letter === "X")
    return (
      <img
        src={BigX}
        className="interact-img"
        alt="Player: X"
        letter={letter}
      />
    )
  if (letter === "O")
    return (
      <img
        src={BigO}
        className="interact-img"
        alt="Computer: O"
        letter={letter}
      />
    )
  return (
    <img src={Empty} className="interact-img" alt="Empty" letter={letter} />
  )
}
