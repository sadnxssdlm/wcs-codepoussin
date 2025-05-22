import Quiz from "../../src/components/Quiz";
import "../assets/styles/HomePage.css";
import Cours from "../components/Cours/Cours";

function HomePage() {
  return (
    <main className="main-content">
      <Cours />
      <Quiz />
    </main>
  );
}

export default HomePage;