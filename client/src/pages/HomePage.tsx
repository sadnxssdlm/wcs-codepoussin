import Quiz from "../../src/components/Quiz";
import "../assets/styles/HomePage.css";
import Cours from "../components/Cours/Cours";
import LevelContainer from "../components/LevelContainer";

function HomePage() {
  return (
    <main className="main-homepage">
      <Cours />
      <Quiz />
      <LevelContainer />
    </main>
  );
}

export default HomePage;
