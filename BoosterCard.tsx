// Booster Profile Card for Framer
import { addPropertyControls, ControlType } from "framer"

interface Props {
  name: string
  rank: string
  wins: number
  winRate: number
  avatar: string
  role: string
}

export default function BoosterCard(props: Props) {
  const { 
    name = "ProPlayer99",
    rank = "Radiant",
    wins = 1542,
    winRate = 87,
    avatar = "https://picsum.photos/200",
    role = "All Roles"
  } = props

  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: "#1a1a2e",
      borderRadius: "12px",
      padding: "1.5rem",
      width: "320px",
      color: "#fff",
      border: "1px solid #2a2a4e",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <img
          src={avatar}
          alt={name}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "3px solid #e94560",
            objectFit: "cover",
          }}
        />
        <div>
          <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "bold" }}>{name}</h3>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            marginTop: "0.25rem" 
          }}>
            <span style={{
              backgroundColor: "#e94560",
              padding: "0.25rem 0.75rem",
              borderRadius: "999px",
              fontSize: "0.75rem",
              fontWeight: "bold",
            }}>
              {rank}
            </span>
            <span style={{ color: "#aaa", fontSize: "0.85rem" }}>{role}</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
        <div style={{
          backgroundColor: "#16213e",
          padding: "1rem",
          borderRadius: "8px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#e94560" }}>
            {wins}
          </div>
          <div style={{ fontSize: "0.85rem", color: "#aaa" }}>
            Total Wins
          </div>
        </div>
        <div style={{
          backgroundColor: "#16213e",
          padding: "1rem",
          borderRadius: "8px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#00ff88" }}>
            {winRate}%
          </div>
          <div style={{ fontSize: "0.85rem", color: "#aaa" }}>
            Win Rate
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button style={{
        width: "100%",
        padding: "1rem",
        backgroundColor: "#e94560",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.2s",
      }} onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#ff6b8a"
      }} onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#e94560"
      }}>
        Hire Booster
      </button>
    </div>
  )
}

addPropertyControls(BoosterCard, {
  name: {
    type: ControlType.String,
    title: "Name",
    defaultValue: "ProPlayer99",
  },
  rank: {
    type: ControlType.String,
    title: "Rank",
    defaultValue: "Radiant",
  },
  wins: {
    type: ControlType.Number,
    title: "Wins",
    defaultValue: 1542,
  },
  winRate: {
    type: ControlType.Number,
    title: "Win Rate %",
    defaultValue: 87,
  },
  avatar: {
    type: ControlType.Image,
    title: "Avatar",
  },
  role: {
    type: ControlType.String,
    title: "Role",
    defaultValue: "All Roles",
  },
})
