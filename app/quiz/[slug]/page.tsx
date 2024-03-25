"use client";
import { useState } from "react";
import quizzesData from "../data.json";
import Link from "next/link";

interface Props {
  quizId: string;
}

interface Answers {
  [key: number]: string;
}

interface QuestionState {
  id: number;
  selectedOptionId: number | null;
}

export default function QuizPage(props: any) {
  const [answers, setAnswers] = useState<Answers>({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizNotFound, setQuizNotFound] = useState(false);
  const [questionStates, setQuestionStates] = useState<QuestionState[]>(
    quizzesData.quizzes[0].questions.map((question) => ({
      id: question.id,
      selectedOptionId: null,
    }))
  );

  const getQuizById = (quizId: string) => {
    const quiz = quizzesData.quizzes.find((quiz) => quiz.id === quizId);
    return quiz ? quiz : null;
  };
  const slug = props.params.slug;
  const quiz = getQuizById(slug);

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 animate-pulse">
          Không tìm thấy Quiz nào !!!!
        </h1>
      </div>
    );
  }

  const handleSubmit = () => {
    let newScore = 0;
    quiz.questions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  const handleChange = (questionId: number, selectedOption: string) => {
    setAnswers({ ...answers, [questionId]: selectedOption });

    const newQuestionStates = questionStates.map((questionState) =>
      questionState.id === questionId
        ? { ...questionState, selectedOptionId: questionId }
        : questionState
    );

    setQuestionStates(newQuestionStates);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {showResult ? (
        <div className="0 h-screen flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg text-center">
            <h1 className="text-3xl font-bold mb-4">Result</h1>
            <p className="mb-2">
              Your score is{" "}
              <span className="text-blue-500 font-semibold">{score}</span> out
              of{" "}
              <span className="text-blue-500 font-semibold">
                {quiz.questions.length}
              </span>
            </p>
            <p
              className={`text-${
                score >= quiz.questions.length / 2 ? "green" : "red"
              }-500 text-xl font-semibold animate-pulse mb-5`}
            >
              {score > quiz.questions.length / 2
                ? "Congratulations!"
                : "Sorry, you didn't pass this time."}
            </p>

            <Link
              href="/quiz"
              className="bg-blue-500 mb-5 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300"
            >
              Làm các bài Quiz khác !
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4"> ❓ {quiz.title}</h1>
          <p className="text-gray-600 mb-8"> 📋 {quiz.description}</p>

          {quiz.questions.map((question) => (
            <div
              key={question.id}
              className={`border border-solid rounded-lg p-4 mb-6 ${
                questionStates.find((q) => q.id === question.id)
                  ?.selectedOptionId
                  ? "border-blue-500"
                  : "border-gray-400"
              }  border-solid border-4`}
            >
              <h2 className="text-lg font-semibold mb-2">
                Question {question.id}
              </h2>
              <p className="mb-2">{question.question}</p>
              <ul>
                {question.options.map((option, index) => (
                  <li key={index} className="mb-2">
                    <label
                      className={`block mb-2 p-2 rounded-lg border ${
                        questionStates.find((q) => q.id === question.id)
                          ?.selectedOptionId === question.id &&
                        answers[question.id] === option
                          ? "bg-blue-100 border-blue-500"
                          : "border-gray-400"
                      } cursor-pointer `}
                    >
                      <input
                        type="radio"
                        value={option}
                        checked={answers[question.id] === option}
                        onChange={() => handleChange(question.id, option)}
                        className="mr-2 cursor-pointer"
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
