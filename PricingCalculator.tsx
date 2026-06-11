// Eloboosting Pricing Calculator for Framer
import { useState, useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

type Rank = "Iron" | "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond" | "Ascendant" | "Immortal" | "Radiant"
type GameMode = "Solo/Duo" | "Flex"

const rankPrices: Record<Rank, number> = {
  Iron: 10,
  Bronze: 15,
  Silver: 20,
  Gold: 30,
  Platinum: 45,
  Diamond: 70,
  Ascendant: 100,
  Immortal: 150,
  Radiant: 300,
}

const ranks: Rank[] = ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Ascendant", "Immortal", "Radiant"]

export default function PricingCalculator() {
  const [currentRank, setCurrentRank] = useState<Rank>("Silver")
  const [desiredRank, setDesiredRank] = useState<Rank>("Gold")
  const [gameMode, setGameMode] = useState<GameMode>("Solo/Duo")
  const [addCoaching, setAddCoaching] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Fix for live site hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  const calculatePrice = () => {
    const currentIndex = ranks.indexOf(currentRank)
    const desiredIndex = ranks.indexOf(desiredRank)

    if (desiredIndex <= currentIndex) {
      return 0
    }

    let total = 0
    for (let i = currentIndex; i < desiredIndex; i++) {
      total += rankPrices[ranks[i]]
    }

    // Game mode multiplier
    if (gameMode === "Flex") {
      total *= 1.2
    }

    // Coaching addon
    if (addCoaching) {
      total += 50
    }

    return Math.round(total)
  }

  const price = isClient ? calculatePrice() : 0

  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      padding: "2rem",
      backgroundColor: "rgba(26, 26, 46, 0.9)", // Semi-transparent so your gradient shows through!
      backdropFilter: "blur(10px)", // Optional: add glass effect!
      color: "#fff",
      borderRadius: "12px",
      maxWidth: "500px",
      width: "100%",
      boxSizing: "border-box",
    }}>
      <h2 style={{ margin: "0 0 1.5rem 0", color: "#e94560" }}>
        🔥 Elo Boosting Calculator
      </h2>

      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#aaa" }}>
          Current Rank
        </label>
        <select
          value={currentRank}
          onChange={(e) => setCurrentRank(e.target.value as Rank)}
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "8px",
            backgroundColor: "#16213e",
            color: "#fff",
            border: "1px solid #0f3460",
          }}
        >
          {ranks.map((rank) => (
            <option key={rank} value={rank}>{rank}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#aaa" }}>
          Desired Rank
        </label>
        <select
          value={desiredRank}
          onChange={(e) => setDesiredRank(e.target.value as Rank)}
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "8px",
            backgroundColor: "#16213e",
            color: "#fff",
            border: "1px solid #0f3460",
          }}
        >
          {ranks.map((rank) => (
            <option key={rank} value={rank}>{rank}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#aaa" }}>
          Game Mode
        </label>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            type="button"
            onClick={() => setGameMode("Solo/Duo")}
            style={{
              flex: 1,
              padding: "0.75rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: gameMode === "Solo/Duo" ? "#e94560" : "#16213e",
              color: "#fff",
            }}
          >
            Solo/Duo
          </button>
          <button
            type="button"
            onClick={() => setGameMode("Flex")}
            style={{
              flex: 1,
              padding: "0.75rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: gameMode === "Flex" ? "#e94560" : "#16213e",
              color: "#fff",
            }}
          >
            Flex
          </button>
        </div>
      </div>

      <div style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input
          type="checkbox"
          id="coaching"
          checked={addCoaching}
          onChange={(e) => setAddCoaching(e.target.checked)}
          style={{ width: "1.2rem", height: "1.2rem" }}
        />
        <label htmlFor="coaching" style={{ color: "#ddd" }}>
          Add 1 Hour Coaching (+$50)
        </label>
      </div>

      <div style={{
        backgroundColor: "#16213e",
        padding: "1.5rem",
        borderRadius: "8px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "0.9rem", color: "#aaa", marginBottom: "0.5rem" }}>
          Total Price
        </div>
        <div style={{ fontSize: "3rem", fontWeight: "bold", color: "#e94560" }}>
          ${price}
        </div>
        <button
          type="button"
          style={{
            marginTop: "1rem",
            width: "100%",
            padding: "1rem",
            backgroundColor: "#e94560",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  )
}

addPropertyControls(PricingCalculator, {})
