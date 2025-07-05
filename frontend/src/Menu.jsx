import React from "react";
import { FaChartLine, FaCogs, FaUsers, FaClock, FaTools, FaBoxOpen } from "react-icons/fa";

export default function Menu() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{
        width: "250px",
        backgroundColor: "#2d3748",
        color: "white",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{
          padding: "16px",
          fontSize: "20px",
          fontWeight: "bold",
          borderBottom: "1px solid #4a5568"
        }}>
          Factory Reporting
        </div>

        <nav style={{ flex: 1, marginTop: "16px" }}>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <MenuItem icon={<FaChartLine />} label="Plant Status" />
            <MenuItem icon={<FaChartLine />} label="Analytics" />
            <MenuGroup icon={<FaCogs />} label="Setup">
              <SubMenuItem label="Machine" />
              <SubMenuItem label="Products" active />
            </MenuGroup>
            <MenuItem icon={<FaUsers />} label="Employees" />
            <MenuItem icon={<FaClock />} label="Downtime" />
            <MenuItem icon={<FaTools />} label="Scrap" />
            <MenuItem icon={<FaBoxOpen />} label="Product Cat" />
            <MenuItem icon={<FaTools />} label="Tool Life" />
          </ul>
        </nav>
      </div>

      {/* Content area */}
      <div style={{
        flex: 1,
        backgroundColor: "#f7fafc",
        padding: "32px",
        overflowY: "auto"
      }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
          Products
        </h1>
        <table style={{ width: "100%", backgroundColor: "white", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#e2e8f0" }}>
              <th style={thStyle}>Machine/Line</th>
              <th style={thStyle}>Short Description</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Standard Rate</th>
              <th style={thStyle}>Std Weight</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Large Can Line 1", "", "", "45", "0"],
              ["Vacuum Packaging 1", "", "", "45", "0"],
              ["Rapid Plastic Line 2", "", "", "45", "0"],
              ["Vacuum Packaging 2", "", "", "45", "0"],
              ["Rapid Can Line", "", "", "45", "0"],
            ].map((row, idx) => (
              <tr key={idx} style={idx === 0 ? { backgroundColor: "#bee3f8" } : {}}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, active }) {
  return (
    <li style={{
      display: "flex",
      alignItems: "center",
      padding: "12px 24px",
      cursor: "pointer",
      backgroundColor: active ? "#3182ce" : "",
      transition: "background 0.2s"
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#4a5568"}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = active ? "#3182ce" : ""}
    >
      <span style={{ marginRight: "12px" }}>{icon}</span>
      {label}
    </li>
  );
}

function MenuGroup({ icon, label, children }) {
  return (
    <>
      <li style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 24px",
        cursor: "pointer",
        transition: "background 0.2s"
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#4a5568"}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}
      >
        <span style={{ marginRight: "12px" }}>{icon}</span>
        {label}
      </li>
      <ul style={{ marginLeft: "32px", listStyle: "none", paddingLeft: 0 }}>
        {children}
      </ul>
    </>
  );
}

function SubMenuItem({ label, active }) {
  return (
    <li style={{
      padding: "8px 0",
      cursor: "pointer",
      color: active ? "#4299e1" : "",
      transition: "color 0.2s"
    }}
    onMouseOver={(e) => e.currentTarget.style.color = "#63b3ed"}
    onMouseOut={(e) => e.currentTarget.style.color = active ? "#4299e1" : ""}
    >
      {label}
    </li>
  );
}

const thStyle = {
  padding: "8px 16px",
  borderBottom: "1px solid #cbd5e0",
  textAlign: "left"
};

const tdStyle = {
  padding: "8px 16px",
  borderBottom: "1px solid #e2e8f0"
};
