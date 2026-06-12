import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "20px",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route
              path="/profile/:id"
              element={<Profile />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
