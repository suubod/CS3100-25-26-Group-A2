import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleAddSubject = () => navigate("/create-subject");
  const handleAddTask = () => navigate("/add-task");
  const handleProgress = () => console.log("Progress clicked");

  const progressPct = 62;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progressPct / 100);

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={sx.page}>
      <header style={sx.topbar}>
        <h1 style={sx.title}>My Dashboard</h1>
        <div style={sx.subtitle}>{today}</div>
      </header>

      {/* Quick stats */}
      <section style={sx.statsRow}>
        <div style={sx.statCard}>
          <span style={sx.statLabel}>Subjects</span>
          <span style={sx.statValue}>6</span>
        </div>
        <div style={sx.statCard}>
          <span style={sx.statLabel}>Tasks due this week</span>
          <span style={sx.statValue}>4</span>
        </div>
        <div style={sx.statCard}>
          <span style={sx.statLabel}>Overall completion</span>
          <span style={sx.statValue}>{progressPct}%</span>
        </div>
      </section>

      <main style={sx.main}>
        {/* Add Subject */}
        <button
          onClick={handleAddSubject}
          style={{ ...sx.card, ...sx.bigCard, border: "1px solid #e5e7eb" }}
        >
          <div style={sx.bigIconWrap}>
            <PlusIcon size={54} />
          </div>
          <div style={sx.bigTitle}>Add Subject</div>
          <div style={sx.bigHint}>
            Create a new subject to organise your notes
          </div>
          <div style={sx.cornerBadge}>New</div>
        </button>

        <div style={sx.rightCol}>
          {/* Add Task */}
          <div role="button" tabIndex={0} onClick={handleAddTask} style={{ ...sx.card, ...sx.actionCard }}>
            <div style={sx.cardHeaderRow}>
              <div style={sx.cardTitleRow}>
                <TaskIcon />
                <span style={sx.cardTitle}>Add Task</span>
              </div>
              <span style={sx.miniPlus}>＋</span>
            </div>
            <p style={sx.cardHint}>Title, due date, priority…</p>
            <div style={sx.pillRow}>
              <span style={sx.pill}>Today</span>
              <span style={sx.pill}>High</span>
            </div>
          </div>

          {/* Progress Tracker */}
          <div role="button" tabIndex={0} onClick={handleProgress} style={{ ...sx.card, ...sx.progressCard }}>
            <div style={sx.cardTitleRow}>
              <ChartIcon />
              <span style={sx.cardTitle}>Progress Tracker</span>
            </div>

            <div style={sx.progressWrap}>
              <svg width="180" height="180" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="90" cy="90" r={radius} stroke="#eef1f6" strokeWidth="14" fill="none" />
                <circle
                  cx="90"
                  cy="90"
                  r={radius}
                  stroke="#2563eb"
                  strokeWidth="14"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                />
              </svg>
              <div style={sx.progressCenter}>
                <div style={sx.progressValue}>{progressPct}%</div>
                <div style={sx.progressLabel}>Complete</div>
              </div>
            </div>

            <div style={sx.progressLegend}>
              <span style={sx.legendDot} />
              8 of 13 tasks done
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function PlusIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function TaskIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
      <path d="M9 11l3 3L22 4" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="2" y="3" width="16" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
      <path d="M3 12h4v8H3zM10 8h4v12h-4zM17 4h4v16h-4z" fill="currentColor" />
    </svg>
  );
}

const sx = {
  page: {
    minHeight: "100vh",
    background: "#f9fafc",
    fontFamily: "Segoe UI, system-ui, Arial, sans-serif",
    color: "#1f2633",
  },
  topbar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px 28px 8px",
    background: "transparent", 
  },
  title: { margin: 0, fontSize: 28, fontWeight: 800, color: "#111827" },
  subtitle: { marginTop: 4, fontSize: 13, color: "#6b7280" },

  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
    padding: "8px 28px 0",
  },
  statCard: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    padding: "14px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statLabel: { fontSize: 13, color: "#6b7280" },
  statValue: { fontSize: 20, fontWeight: 700 },

  main: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    padding: "20px 28px 28px",
  },
  card: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    padding: 18,
    boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
  },
  bigCard: {
    minHeight: 320,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  bigIconWrap: {
    height: 86,
    width: 86,
    borderRadius: 18,
    background: "#e0e7ff",
    border: "1px solid #c7d2fe",
    display: "grid",
    placeItems: "center",
    marginBottom: 12,
  },
  bigTitle: {
    fontSize: 22,
    fontWeight: 800,      
    color: "#111827",     
    marginBottom: 6,
  },
  bigHint: { color: "#6b7280", fontSize: 14 },
  cornerBadge: {
    position: "absolute",
    top: 14,
    right: 14,
    fontSize: 12,
    background: "#2563eb",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: 999,
  },

  rightCol: { display: "grid", gridTemplateRows: "auto 1fr", gap: 20 },
  actionCard: { minHeight: 130 },
  cardHeaderRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitleRow: { display: "flex", alignItems: "center" },
  cardTitle: { fontSize: 18, fontWeight: 700 },
  miniPlus: { fontSize: 28, color: "#2563eb", fontWeight: 700 },
  cardHint: { marginTop: 8, color: "#6b7280", fontSize: 14, textAlign: "left" },

  pillRow: { display: "flex", gap: 8, marginTop: 10 },
  pill: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    background: "#f3f4f6",
    border: "1px solid #e5e7eb",
  },

  progressCard: {
    display: "grid",
    gap: 20,
    alignContent: "center",
    justifyItems: "center",
    minHeight: 300,
  },
  progressWrap: { position: "relative", width: 180, height: 180 },
  progressCenter: {
    position: "absolute",
    inset: 0,
    display: "grid",
    placeItems: "center",
    textAlign: "center",
  },
  progressValue: { fontWeight: 800, fontSize: 28 },
  progressLabel: { fontSize: 12, color: "#667085" },
  progressLegend: { marginTop: 8, fontSize: 13, color: "#374151" },
  legendDot: {
    display: "inline-block",
    width: 8,
    height: 8,
    borderRadius: 999,
    background: "#2563eb",
    marginRight: 8,
  },
};
