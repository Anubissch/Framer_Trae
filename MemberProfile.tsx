// Member Profile Component for Framer
import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  username: string
  email: string
  avatar: string
  currentRank: string
  eloPoints: number
  ordersCompleted: number
  totalSpent: number
}

export default function MemberProfile(props: Props) {
  const {
    username = "GamerPro123",
    email = "gamer@example.com",
    avatar = "https://picsum.photos/200",
    currentRank = "Diamond",
    eloPoints = 12450,
    ordersCompleted = 12,
    totalSpent = 350,
  } = props

  const [isEditing, setIsEditing] = useState(false)

  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: "#1a1a2e",
      borderRadius: "16px",
      padding: "2rem",
      maxWidth: "600px",
      color: "#fff",
    }}>
      {/* Header with Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
        <img
          src={avatar}
          alt={username}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "3px solid #e94560",
            objectFit: "cover",
          }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontSize: "1.75rem" }}>{username}</h2>
          <p style={{ margin: "0.25rem 0 0 0", color: "#aaa" }>{email}</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          style={{
            padding: "0.75rem 1.25rem",
            backgroundColor: isEditing ? "#333" : "#e94560",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {isEditing ? "Save" : "Edit Profile"}
        </button>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
        marginBottom: "2rem",
      }}>
        <div style={{
          backgroundColor: "#16213e",
          padding: "1.25rem",
          borderRadius: "12px",
          textAlign: "center",
        }}>
          <div style={{ color: "#e94560", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Current Rank</div>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{currentRank}</div>
        </div>
        <div style={{
          backgroundColor: "#16213e",
          padding: "1.25rem",
          borderRadius: "12px",
          textAlign: "center",
        }}>
          <div style={{ color: "#00ff88", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Elo Points</div>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{eloPoints.toLocaleString()}</div>
        </div>
        <div style={{
          backgroundColor: "#16213e",
          padding: "1.25rem",
          borderRadius: "12px",
          textAlign: "center",
        }}>
          <div style={{ color: "#aaa", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Orders</div>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{ordersCompleted}</div>
        </div>
        <div style={{
          backgroundColor: "#16213e",
          padding: "1.25rem",
          borderRadius: "12px",
          textAlign: "center",
        }}>
          <div style={{ color: "#aaa", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Total Spent</div>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>${totalSpent}</div>
        </div>
      </div>

      {/* Account Settings Placeholder */}
      <div style={{
        backgroundColor: "#16213e",
        padding: "1.5rem",
        borderRadius: "12px",
      }}>
        <h3 style={{ margin: "0 0 1rem 0", fontSize: "1rem" }}>Account Settings</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <button style={{
            textAlign: "left",
            padding: "0.75rem 1rem",
            backgroundColor: "transparent",
            color: "#fff",
            border: "1px solid #2a2a4e",
            borderRadius: "8px",
            cursor: "pointer",
          }}>
            Change Password
          </button>
          <button style={{
            textAlign: "left",
            padding: "0.75rem 1rem",
            backgroundColor: "transparent",
            color: "#fff",
            border: "1px solid #2a2a4e",
            borderRadius: "8px",
            cursor: "pointer",
          }}>
            Notification Settings
          </button>
          <button style={{
            textAlign: "left",
            padding: "0.75rem 1rem",
            backgroundColor: "transparent",
            color: "#ff4444",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

addPropertyControls(MemberProfile, {
  username: {
    type: ControlType.String,
    title: "Username",
    defaultValue: "GamerPro123",
  },
  email: {
    type: ControlType.String,
    title: "Email",
    defaultValue: "gamer@example.com",
  },
  avatar: {
    type: ControlType.Image,
    title: "Avatar",
  },
  currentRank: {
    type: ControlType.String,
    title: "Current Rank",
    defaultValue: "Diamond",
  },
  eloPoints: {
    type: ControlType.Number,
    title: "Elo Points",
    defaultValue: 12450,
  },
  ordersCompleted: {
    type: ControlType.Number,
    title: "Orders Completed",
    defaultValue: 12,
  },
  totalSpent: {
    type: ControlType.Number,
    title: "Total Spent",
    defaultValue: 350,
  },
})
