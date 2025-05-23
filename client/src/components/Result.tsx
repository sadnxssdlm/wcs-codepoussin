import "../assets/Style/Quiz.css";

interface ResultatProps {
  score: number;
  totalQuestion: number;
}

const Result = ({ score, totalQuestion }: ResultatProps) => {
  return (
    <div className="result">
      <h2>Quiz terminé</h2>
      <p>
        Votre score est de {score} sur un total de {totalQuestion}
      </p>
      {score >= 5 ? (
        <img src="/CanardGoat.png" alt="Canard Goat" className="resultimage" />
      ) : (
        <img
          src="/CanardBatte.png"
          alt="Canard Batte"
          className="resultimage"
        />
      )}
    </div>
  );
};

export default Result;
