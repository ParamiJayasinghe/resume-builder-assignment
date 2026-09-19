import { createRoot, useState } from "@wordpress/element";

const App = () => {
  // Basic state to hold the user's input
  const [fullName, setFullName] = useState("");

  return (
    <div
      style={{
        padding: "20px",
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
    >
      <h2>Resume Builder</h2>

      {/* Editor Section */}
      <div style={{ marginBottom: "20px" }}>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Full Name:
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="e.g., PJ"
          style={{ width: "100%", padding: "8px", maxWidth: "400px" }}
        />
      </div>

      <hr style={{ margin: "20px 0" }} />

      {/* Live Preview Section */}
      <div
        style={{
          padding: "20px",
          background: "#f6f7f7",
          borderLeft: "4px solid #0073aa",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Live Preview</h3>
        <h1 style={{ margin: 0 }}>{fullName ? fullName : "Your Name"}</h1>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("resume-builder-root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
