// Login / Signup Form for Framer
import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

type FormMode = "login" | "signup"

export default function AuthForm() {
  const [mode, setMode] = useState<FormMode>("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      alert(`${mode === "login" ? "Logged in!" : "Account created!"} - Connect this to your backend!`)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      maxWidth: "400px",
      margin: "0 auto",
      padding: "2rem",
      backgroundColor: "#1a1a2e",
      borderRadius: "16px",
      color: "#fff",
    }}>
      {/* Header Toggle */}
      <div style={{
        display: "flex",
        backgroundColor: "#16213e",
        borderRadius: "8px",
        padding: "4px",
        marginBottom: "2rem",
      }}>
        <button
          onClick={() => setMode("login")}
          style={{
            flex: 1,
            padding: "0.75rem",
            border: "none",
            borderRadius: "6px",
            backgroundColor: mode === "login" ? "#e94560" : "transparent",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Login
        </button>
        <button
          onClick={() => setMode("signup")}
          style={{
            flex: 1,
            padding: "0.75rem",
            border: "none",
            borderRadius: "6px",
            backgroundColor: mode === "signup" ? "#e94560" : "transparent",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {mode === "signup" && (
          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", color: "#aaa", fontSize: "0.9rem" }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your username"
              required
              style={{
                width: "100%",
                padding: "0.875rem",
                backgroundColor: "#16213e",
                border: "1px solid #2a2a4e",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "1rem",
                outline: "none",
              }}
            />
          </div>
        )}

        <div style={{ marginBottom: "1.25rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", color: "#aaa", fontSize: "0.9rem" }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            style={{
              width: "100%",
              padding: "0.875rem",
              backgroundColor: "#16213e",
              border: "1px solid #2a2a4e",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "1.75rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", color: "#aaa", fontSize: "0.9rem" }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            style={{
              width: "100%",
              padding: "0.875rem",
              backgroundColor: "#16213e",
              border: "1px solid #2a2a4e",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "1rem",
            backgroundColor: "#e94560",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: isLoading ? "not-allowed" : "pointer",
            opacity: isLoading ? 0.7 : 1,
            transition: "all 0.2s",
          }}
        >
          {isLoading ? "Loading..." : (mode === "login" ? "Login" : "Create Account")}
        </button>
      </form>
    </div>
  )
}

addPropertyControls(AuthForm, {})
