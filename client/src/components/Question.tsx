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
      {showNextButton && (
        <button type="button" className="next" onClick={onNext}>
          Question suivante
        </button>
      )}
    </div>
  );
};

export default Question;
