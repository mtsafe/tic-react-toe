export function NewGameButton({ restartGame }) {
  return (
    <button className="pill-button" onClick={restartGame}>
      Restart Game?
    </button>
  )
}
