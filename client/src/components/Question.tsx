import "../assets/Style/Quiz.css";

interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (option: string) => void;
  onNext: () => void;
  showNextButton: boolean;
}

const Question = ({
  question,
  options,
  onAnswer,
  onNext,
  showNextButton,
}: QuestionProps) => {
  return (
    <div className="question">
      <div className="menu">
        <h2>{question}</h2>
        {options.map((option) => (
          <button
            type="button"
            className="option"
            key={option}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {showNextButton && (
        <div className="next">
          <button type="button" onClick={onNext}>
            Question suivante
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
