// Member Dashboard for Framer
import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

type OrderStatus = "pending" | "in_progress" | "completed" | "cancelled"

interface Order {
  id: string
  service: string
  price: number
  status: OrderStatus
  date: string
}

const sampleOrders: Order[] = [
  { id: "#ORD-1234", service: "Silver → Gold (Solo)", price: 85, status: "in_progress", date: "2024-01-15" },
  { id: "#ORD-1230", service: "1 Hour Coaching", price: 30, status: "completed", date: "2024-01-10" },
  { id: "#ORD-1225", service: "Placement Matches", price: 60, status: "completed", date: "2024-01-05" },
]

const statusColors: Record<OrderStatus, string> = {
  pending: "#ffaa00",
  in_progress: "#0088ff",
  completed: "#00ff88",
  cancelled: "#ff4444",
}

export default function MemberDashboard() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "orders" | "boosters">("dashboard")

  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: "#1a1a2e",
      minHeight: "100vh",
      color: "#fff",
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: "#16213e",
        padding: "1rem 2rem",
        borderBottom: "1px solid #2a2a4e",
      }}>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {(["dashboard", "orders", "boosters"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: activeTab === tab ? "#e94560" : "transparent",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Dashboard View */}
        {activeTab === "dashboard" && (
          <div>
            <h2 style={{ margin: "0 0 2rem 0" }}>Welcome back, Gamer!</h2>

            {/* Quick Actions */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginBottom: "2rem",
            }}>
              <button style={{
                padding: "2rem",
                backgroundColor: "#16213e",
                border: "1px solid #2a2a4e",
                borderRadius: "12px",
                color: "#fff",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: "bold",
              }}>
                🚀 Order New Boost
              </button>
              <button style={{
                padding: "2rem",
                backgroundColor: "#16213e",
                border: "1px solid #2a2a4e",
                borderRadius: "12px",
                color: "#fff",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: "bold",
              }}>
                🎯 Book Coaching
              </button>
              <button style={{
                padding: "2rem",
                backgroundColor: "#16213e",
                border: "1px solid #2a2a4e",
                borderRadius: "12px",
                color: "#fff",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: "bold",
              }}>
                👥 View Boosters
              </button>
            </div>

            {/* Recent Orders Preview */}
            <div style={{
              backgroundColor: "#16213e",
              padding: "1.5rem",
              borderRadius: "12px",
            }}>
              <h3 style={{ margin: "0 0 1rem 0" }}>Recent Orders</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {sampleOrders.slice(0, 2).map((order) => (
                  <div key={order.id} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                    backgroundColor: "#1a1a2e",
                    borderRadius: "8px",
                  }}>
                    <div>
                      <div style={{ fontWeight: "bold" }}>{order.id}</div>
                      <div style={{ color: "#aaa", fontSize: "0.9rem" }}>{order.service}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ color: statusColors[order.status], fontWeight: "bold" }}>
                        {order.status.replace("_", " ")}
                      </div>
                      <div style={{ color: "#aaa", fontSize: "0.9rem" }}>${order.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Orders View */}
        {activeTab === "orders" && (
          <div>
            <h2 style={{ margin: "0 0 2rem 0" }}>Your Orders</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {sampleOrders.map((order) => (
                <div key={order.id} style={{
                  backgroundColor: "#16213e",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <div>
                    <div style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.25rem" }}>
                      {order.id}
                    </div>
                    <div style={{ color: "#ddd" }}>{order.service}</div>
                    <div style={{ color: "#aaa", fontSize: "0.85rem" }}>{order.date}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      display: "inline-block",
                      padding: "0.25rem 0.75rem",
                      backgroundColor: statusColors[order.status],
                      borderRadius: "999px",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      textTransform: "capitalize",
                    }}>
                      {order.status.replace("_", " ")}
                    </div>
                    <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#e94560" }}>
                      ${order.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Boosters View */}
        {activeTab === "boosters" && (
          <div>
            <h2 style={{ margin: "0 0 2rem 0" }}>Our Top Boosters</h2>
            <p style={{ color: "#aaa" }}>Connect your CMS to display boosters here!</p>
          </div>
        )}
      </div>
    </div>
  )
}

addPropertyControls(MemberDashboard, {})
