import { useState } from "react"
import { GameBoard } from "./GameBoard"
import { GameStatus } from "./GameStatus"
import { AISelector } from "./AISelector"
import { aiChoosesToe, tie, winner } from "./lib/applib"
import { NewGameButton } from "./NewGameButton"
import "./App.css"

function App() {
  console.log("App()")
  const [toes, setToes] = useState(newToes)
  const [statusMsg, setStatusMsg] = useState("Go!")
  const [aiStrategy, setAIStrategy] = useState(1)

  function newToes() {
    let result = []
    for (let i = 0; i < 9; i++) {
      let toe_id = i.toString()
      result = [...result, { toe_id: toe_id, letter: "0" }]
    }
    return result
  }

  function restartGame() {
    setToes(newToes())
    setStatusMsg(() => "Go!")
  }

  let foot = toes.map(toe => {
    return toe.letter
  })

  function playerClaimsToe(toe_id) {
    console.log("playerClaimsToe()")
    toggleToe(toe_id, "X")
  }
  function aiClaimsToe(toe_id) {
    console.log("aiClaimsToe()")
    toggleToe(toe_id, "O")
  }
  function displayWinner() {
    console.log("----- WINNER DETERMINED -----")
    setStatusMsg(() => "You Win!")
    console.log("Status MSG Set")
  }
  function displayLoser() {
    setStatusMsg(() => "You Lose...")
  }
  function displayTie() {
    setStatusMsg(() => "The cat got it.")
  }

  function playerSelected(toe_id, imgElement) {
    console.log("playerSelected()")

    if (statusMsg !== "Go!") return

    let toeLetter = imgElement.attributes.letter.nodeValue
    console.log("toeLetter=" + toeLetter)

    console.dir("foot=" + foot)
    if (toeLetter !== "0") return
    playerClaimsToe(toe_id)
    console.dir("foot=" + foot)
    if (winner(foot, "X")) {
      displayWinner()
      return
    }
    if (tie(foot)) {
      displayTie()
      return
    }

    aiClaimsToe(aiChoosesToe(aiStrategy, foot))
    console.dir("foot=" + foot)
    if (winner(foot, "O")) {
      displayLoser()
      return
    }
    if (tie(foot)) {
      displayTie()
      return
    }
  }

  function toggleToe(toe_id, letter) {
    console.log("toggleToe()")
    foot[toe_id] = letter
    setToes(toesState => {
      return toesState.map(toe => {
        if (toe.toe_id === toe_id) {
          return { ...toe, letter }
        }
        return toe
      })
    })
  }

  function changeAI(value) {
    setAIStrategy(parseInt(value))
  }

  return (
    <>
      <h1>TIC-TAC-TOE + Vite + React</h1>
      <h2>[You Against AI!]</h2>
      <GameBoard toes={toes} playerSelected={playerSelected} />
      <div>
        <GameStatus statusMsg={statusMsg} />
        <div>
          <span>
            <NewGameButton restartGame={restartGame} />
            <AISelector changeAI={changeAI} />
          </span>
        </div>
      </div>
    </>
  )
}

export default App
