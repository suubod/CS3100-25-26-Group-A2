import React from "react";

export default function Dashboard() {
  // --- Nav actions (work now) ---
  const goBack = () => {
    if (window.history.length > 1) window.history.back();
    else console.log("No page to go back to.");
  };
  const goForward = () => window.history.forward();

  // --- Future routes (clickable later) ---
  const handleAddSubject = () => console.log("Add Subject clicked");
  const handleAddTask = () => console.log("Add Task clicked");
  const handleProgress = () => console.log("Progress clicked");
  const handleViewAllSubjects = () => console.log("View All Subjects");
  const handleViewTasks = () => console.log("View Tasks");

  // Accessibility helper to make “div as button” keyboard friendly (Enter/Space)
  const onKeyActivate = (fn) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fn();
    }
  };

  // Progress (larger circle)
  const progressPct = 62;
  const radius = 70; // larger circle radius
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progressPct / 100);

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={sx.page}>
      {/* Topbar */}
      <header style={sx.topbar}>
        <div style={sx.leftTop}>
          <div style={sx.navBtns}>
            <button
              style={sx.iconBtn}
              onClick={goBack}
              aria-label="Go back"
              title="Back"
            >
              <ChevronLeftIcon />
            </button>
            <button
              style={sx.iconBtn}
              onClick={goForward}
              aria-label="Go forward"
              title="Forward"
            >
              <ChevronRightIcon />
            </button>
          </div>
          <div>
            <h1 style={sx.title}>My Dashboard</h1>
            <div style={sx.subtitle}>{today}</div>
          </div>
        </div>

        <div style={sx.quickActions}>
          <button style={sx.ghostBtn} onClick={handleViewAllSubjects}>
            View all subjects
          </button>
          <button style={sx.primaryBtn} onClick={handleAddTask}>
            + Quick Add Task
          </button>
        </div>
      </header>

      {/* Quick stats */}
      <section style={sx.statsRow}>
        <div style={{ ...sx.statCard, ...sx.shadowSm }}>
          <span style={sx.statLabel}>Subjects</span>
          <span style={sx.statValue}>6</span>
        </div>
        <div style={{ ...sx.statCard, ...sx.shadowSm }}>
          <span style={sx.statLabel}>Tasks due this week</span>
          <span style={sx.statValue}>4</span>
        </div>
        <div style={{ ...sx.statCard, ...sx.shadowSm }}>
          <span style={sx.statLabel}>Overall completion</span>
          <span style={sx.statValue}>{progressPct}%</span>
        </div>
      </section>

      {/* Main two-column layout */}
      <main style={sx.main}>
        {/* Left: Big Add Subject tile */}
        <div
          role="button"
          tabIndex={0}
          onClick={handleAddSubject}
          onKeyDown={onKeyActivate(handleAddSubject)}
          style={{ ...sx.card, ...sx.bigCard, ...sx.gradientCard }}
          aria-label="Add Subject"
        >
          <div style={sx.bigIconWrap}>
            <PlusIcon size={54} />
          </div>
          <div style={sx.bigTitle}>Add Subject</div>
          <div style={sx.bigHint}>Create a new subject to organise your notes</div>

          <div style={sx.cornerBadge}>New</div>
        </div>

        {/* Right column */}
        <div style={sx.rightCol}>
          {/* Add Task card (top-right) */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleAddTask}
            onKeyDown={onKeyActivate(handleAddTask)}
            style={{ ...sx.card, ...sx.actionCard }}
            aria-label="Add Task"
          >
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

          {/* Progress card (bottom-right, enlarged) */}
          <div
            role="button"
            tabIndex={0}
            onClick={handleProgress}
            onKeyDown={onKeyActivate(handleProgress)}
            style={{ ...sx.card, ...sx.progressCard }}
            aria-label="Progress Tracker"
          >
            <div style={sx.cardTitleRow}>
              <ChartIcon />
              <span style={sx.cardTitle}>Progress Tracker</span>
            </div>

            <div style={sx.progressWrap}>
              <svg width="180" height="180" style={{ transform: "rotate(-90deg)" }}>
                <circle
                  cx="90"
                  cy="90"
                  r={radius}
                  stroke="#eef1f6"
                  strokeWidth="14"
                  fill="none"
                />
                <circle
                  cx="90"
                  cy="90"
                  r={radius}
                  stroke="#4b6bfb"
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

/* --- Inline SVG icons (no dependencies) --- */
function ChevronLeftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ChevronRightIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function PlusIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
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

/* --- Styles --- */
const sx = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f7f8fb 0%, #f1f3f9 100%)",
    fontFamily: "Segoe UI, system-ui, -apple-system, Arial, sans-serif",
    color: "#1f2633",
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "24px 28px 8px",
  },
  leftTop: { display: "flex", alignItems: "flex-start", gap: 16 },
  navBtns: { display: "flex", gap: 8, marginTop: 6 },
  iconBtn: {
    height: 36,
    width: 36,
    borderRadius: 10,
    border: "1px solid #e4e7ef",
    background: "#fff",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    transition: "transform 120ms ease, box-shadow 120ms ease",
  },
  title: { margin: 0, fontSize: 28, fontWeight: 700 },
  subtitle: { marginTop: 4, fontSize: 13, color: "#667085" },
  quickActions: { display: "flex", gap: 10 },
  ghostBtn: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid #e4e7ef",
    background: "#fff",
    cursor: "pointer",
  },
  primaryBtn: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "none",
    background: "#4b6bfb",
    color: "#fff",
    cursor: "pointer",
  },

  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 16,
    padding: "8px 28px 0",
  },
  statCard: {
    background: "#fff",
    border: "1px solid #e6e8ef",
    borderRadius: 14,
    padding: "14px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statLabel: { fontSize: 13, color: "#667085" },
  statValue: { fontSize: 20, fontWeight: 700 },

  main: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    padding: "20px 28px 28px",
    alignItems: "start",
  },
  card: {
    background: "#fff",
    border: "1px solid #e6e8ef",
    borderRadius: 16,
    padding: 18,
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    transition: "transform 140ms ease, box-shadow 140ms ease",
    cursor: "pointer",
  },
  shadowSm: { boxShadow: "0 2px 10px rgba(0,0,0,0.06)" },
  gradientCard: {
    background:
      "linear-gradient(135deg, rgba(75,107,251,0.10) 0%, rgba(75,107,251,0.05) 100%)",
  },
  bigCard: {
    minHeight: 360,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  bigIconWrap: {
    height: 86,
    width: 86,
    borderRadius: 18,
    background: "#fff",
    border: "1px solid #e6e8ef",
    display: "grid",
    placeItems: "center",
    marginBottom: 10,
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  },
  bigTitle: { fontSize: 22, fontWeight: 800, letterSpacing: 0.2 },
  bigHint: { marginTop: 6, color: "#667085", fontSize: 14 },
  cornerBadge: {
    position: "absolute",
    top: 14,
    right: 14,
    fontSize: 12,
    background: "#4b6bfb",
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
    gap: 8,
  },
  cardTitleRow: { display: "flex", alignItems: "center" },
  cardTitle: { fontSize: 18, fontWeight: 700 },
  miniPlus: { fontSize: 28, color: "#4b6bfb", fontWeight: 700, lineHeight: 1 },
  cardHint: { marginTop: 8, color: "#667085", fontSize: 14 },
  pillRow: { display: "flex", gap: 8, marginTop: 10 },
  pill: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    background: "#f3f5fb",
    border: "1px solid #e6e8ef",
  },

  /* Enlarged progress tracker styles */
  progressCard: {
    display: "grid",
    gap: 20,
    alignContent: "center",
    justifyItems: "center",
    minHeight: 340,
    paddingTop: 20,
    paddingBottom: 20,
  },
  progressWrap: {
    position: "relative",
    width: 180,
    height: 180,
    marginTop: 4,
  },
  progressCenter: {
    position: "absolute",
    inset: 0,
    display: "grid",
    placeItems: "center",
    textAlign: "center",
  },
  progressValue: { fontWeight: 800, fontSize: 28 },
  progressLabel: { fontSize: 12, color: "#667085" },
  progressLegend: { marginTop: 8, fontSize: 13, color: "#4b5565" },
  legendDot: {
    display: "inline-block",
    width: 8,
    height: 8,
    borderRadius: 999,
    background: "#4b6bfb",
    marginRight: 8,
  },
};

/* Hover/focus effects (applies globally) */
const root = document.documentElement;
if (root && !root.style.getPropertyValue("--_fancy")) {
  root.style.setProperty("--_fancy", "1");
  const style = document.createElement("style");
  style.innerHTML = `
    button, [role="button"] {
      outline: none;
    }
    button:focus-visible, [role="button"]:focus-visible {
      box-shadow: 0 0 0 3px rgba(75,107,251,0.35) !important;
    }
    .hover-lift:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(0,0,0,0.10) !important;
    }
  `;
  document.head.appendChild(style);
}
