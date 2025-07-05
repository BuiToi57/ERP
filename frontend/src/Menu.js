import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaChartLine, FaCogs, FaUsers, FaClock, FaTools, FaBoxOpen } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <h1>MENU</h1>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <MenuItem icon={<FaChartLine />} label="Edit" to="/plant" />
              <MenuItem icon={<FaChartLine />} label="Setup" to="/analytics" />
              <MenuGroup icon={<FaCogs />} label="Setup">
                <SubMenuItem label="Machine" to="/setup/machine" />
                <SubMenuItem label="Products" to="/setup/products" />
              </MenuGroup>
              <MenuItem icon={<FaUsers />} label="Employees" to="/employees" />
              <MenuItem icon={<FaClock />} label="Downtime" to="/downtime" />
              <MenuItem icon={<FaTools />} label="Scrap" to="/scrap" />
              <MenuItem icon={<FaBoxOpen />} label="Product Cat" to="/product-cat" />
              <MenuItem icon={<FaTools />} label="Tool Life" to="/toollife" />
            </ul>
          </nav>
        </div>

        <div className="content">
          <Routes>
            <Route path="/setup/products" element={<Products />} />
            <Route path="/employees" element={<h1>Employees Page</h1>} />
            <Route path="/plant" element={<h1>Plant Status Page</h1>} />
            <Route path="/analytics" element={<h1>Analytics Page</h1>} />
            <Route path="*" element={<h1>Welcome! Select a menu.</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function MenuItem({ icon, label, to }) {
  return (
    <li className="menu-item">
      <Link to={to} className="link">
        <span className="icon">{icon}</span>
        {label}
      </Link>
    </li>
  );
}

function MenuGroup({ icon, label, children }) {
  return (
    <>
      <li className="menu-group">
        <span className="icon">{icon}</span>
        {label}
      </li>
      <ul className="submenu-list">
        {children}
      </ul>
    </>
  );
}

function SubMenuItem({ label, to }) {
  return (
    <li className="submenu-item">
      <Link to={to} className="link">
        {label}
      </Link>
    </li>
  );
}

function Products() {
  return (
    <>
      <h1>Products</h1>
      <table className="products-table">
        <thead>
          <tr>
            <th>Machine/Line</th>
            <th>Short Description</th>
            <th>Description</th>
            <th>Standard Rate</th>
            <th>Std Weight</th>
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
            <tr key={idx} className={idx === 0 ? "highlight" : ""}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
