import { useCallback, useEffect, useState } from "react";
import Question from "./Question";
import Result from "./Result";

interface QuestionData {
  question: string;
  options: string[];
  answer: string;
}

const data: QuestionData[] = [
  {
    question: "Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
    options: ["<link>", "<a>", "<href>", "<p>"],
    answer: "<a>",
  },
  {
    question: "Comment sélectionnez-vous un élément avec l'id 'titre' en CSS ?",
    options: [".titre", "#titre", "id(titre)", "element.titre"],
    answer: "#titre",
  },
  {
    question:
      "Quel mot-clé est utilisé pour déclarer une variable en JavaScript qui ne peut pas être réassignée ?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },
  {
    question:
      "Quelle propriété CSS est utilisée pour changer la couleur du texte d'un élément ?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: "color",
  },
  {
    question:
      "Comment écrivez-vous un commentaire sur une seule ligne en JavaScript ?",
    options: ["// Commentaire", "", "/* Commentaire */", "# Commentaire"],
    answer: "// Commentaire",
  },
  {
    question:
      "Quel attribut HTML spécifie une URL alternative pour une image si l'image ne peut pas être affichée ?",
    options: ["src", "href", "alt", "title"],
    answer: "alt",
  },
  {
    question:
      "Quelle est la méthode correcte pour lier une feuille de style externe (style.css) à un document HTML ?",
    options: [
      "<style src='style.css'>",
      "<stylesheet>style.css</stylesheet>",
      "<link rel='stylesheet' href='style.css'>",
      "<css href='style.css'>",
    ],
    answer: "<link rel='stylesheet' href='style.css'>",
  },
  {
    question:
      "Quel opérateur est utilisé pour vérifier à la fois la valeur et le type en JavaScript ?",
    options: ["==", "===", "=", "!="],
    answer: "===",
  },
  {
    question:
      "Quelle balise HTML est utilisée pour définir une liste non ordonnée ?",
    options: ["<ol>", "<list>", "<ul>", "<dl>"],
    answer: "<ul>",
  },
  {
    question:
      "Comment ciblez-vous tous les éléments <p> qui sont des enfants directs d'un élément <div> en CSS ?",
    options: ["div p", "div + p", "div > p", "div ~ p"],
    answer: "div > p",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleNext = useCallback(() => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
    setShowNextButton(false);
    setTimer(30);
  }, [currentQuestion]);

  useEffect(() => {
    if (timer === 0) {
      handleNext();
      return;
    }

    if (showResult) {
      return () => {};
    }

    const timerId = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timer, handleNext, showResult]);

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === data[currentQuestion].answer) {
      setScore(score + 1);
    }
    setShowNextButton(true);
  };

  if (showResult) {
    return <Result score={score} totalQuestion={data.length} />;
  }

  return (
    <div className="quiz">
      <div className="countandTime">
        <div className="questionNumber">
          Question : {currentQuestion + 1} <b>/</b> {data.length}
        </div>
        <div className="timer">Temps restant : {timer} secondes</div>
      </div>
      <Question
        question={data[currentQuestion].question}
        options={data[currentQuestion].options}
        onAnswer={handleAnswer}
        onNext={handleNext}
        showNextButton={showNextButton}
      />
    </div>
  );
};

export default Quiz;
