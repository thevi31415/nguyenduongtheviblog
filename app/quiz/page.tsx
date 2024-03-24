"use client";
import { useState } from "react";
import data from "./data.json";

export default function QuizPage() {
  const initialAnswers: string[][] = new Array(data.quizzes.length).fill([]);
  const [answers, setAnswers] = useState<string[][]>(initialAnswers);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const quizId = 1; // Gán id của quiz cần hiển thị

  const handleAnswerChange = (
    quizIndex: number,
    answerIndex: number,
    answer: string
  ) => {
    const newAnswers = [...answers];
    newAnswers[quizIndex][answerIndex] = answer;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let newScore = 0;
    data.quizzes[quizId - 1].questions.forEach((question, qIndex) => {
      if (question.answer === answers[quizId - 1][qIndex]) {
        newScore++;
      }
    });
    return newScore;
  };

  const handleSubmit = () => {
    const newScore = calculateScore();
    setScore(newScore);
    setShowResult(true);
  };

  return (
    <div>
      {!showResult && (
        <>
          {data.quizzes.map((quiz) => (
            <div key={quiz.id}>
              {quiz.id === quizId && (
                <div>
                  <h2>{quiz.title}</h2>
                  <p>{quiz.description}</p>
                  {quiz.questions.map((question, qIndex) => (
                    <div key={question.id}>
                      <p>{question.question}</p>
                      {question.options.map((option, optionIndex) => (
                        <label key={option}>
                          <input
                            type="radio"
                            name={`quiz-${quiz.id}-question-${qIndex}`}
                            value={option}
                            checked={answers[quizId - 1][qIndex] === option}
                            onChange={() =>
                              handleAnswerChange(quizId - 1, qIndex, option)
                            }
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
      {showResult && (
        <div>
          <h2>Congratulations!</h2>
          <p>
            Your score for Quiz {quizId} is {score}.
          </p>
        </div>
      )}
    </div>
  );
}
