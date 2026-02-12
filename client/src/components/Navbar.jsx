import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 20, background: "#111", color: "#fff" }}>
      <Link to="/dashboard">Dashboard</Link>{" | "}
      <Link to="/workouts">Treinos</Link>{" | "}
      <Link to="/meals">Alimentação</Link>{" | "}
      <Link to="/progress">Progresso</Link>
    </nav>
  );
}
