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
    </div>
  );
};

export default Result;
