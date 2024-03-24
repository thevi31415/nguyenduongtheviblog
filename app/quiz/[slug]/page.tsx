"use client";
import { useState } from "react";
import data from "../data.json";

export default function QuizPage(props: any) {
  const initialAnswers: string[][] = new Array(data.quizzes.length).fill([]);
  const [answers, setAnswers] = useState<string[][]>(initialAnswers);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const slug = props.params.slug;
  const quizId = parseInt(slug, 10);

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
                  <h2 className="text-2xl font-bold mb-4">{quiz.title}</h2>
                  <p className="text-gray-600 mb-6">{quiz.description}</p>
                  {quiz.questions.map((question, qIndex) => (
                    <div key={question.id} className="mb-6">
                      <div
                        className={`border ${
                          answers[quizId - 1][qIndex]
                            ? "border-green-500"
                            : "border-blue-500"
                        } border-solid border-4 rounded-lg p-4`}
                      >
                        <p className="text-lg font-semibold mb-2">
                          <span className="text-lg font-bold text-blue-600">
                            Câu {qIndex + 1}:{" "}
                          </span>
                          {question.question}
                        </p>
                        {question.options.map((option, optionIndex) => (
                          <label
                            key={option}
                            className={`block mb-2 p-2 rounded-lg ${
                              answers[quizId - 1][qIndex] === option
                                ? "bg-blue-200"
                                : "border border-blue-500 hover:border-blue-700 hover:bg-blue-100"
                            } cursor-pointer`}
                          >
                            <input
                              type="radio"
                              name={`quiz-${quiz.id}-question-${qIndex}`}
                              value={option}
                              checked={answers[quizId - 1][qIndex] === option}
                              onChange={() =>
                                handleAnswerChange(quizId - 1, qIndex, option)
                              }
                              className="mr-2 cursor-pointer"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </>
      )}
      {showResult && (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
              Congratulations!
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Your score for Quiz <span className="font-bold">{quizId}</span> is{" "}
              <span className="font-bold text-purple-600">{score}</span>.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300 ease-in-out transform hover:scale-105">
              Start a New Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
