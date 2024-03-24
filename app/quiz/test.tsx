import { promises as fs } from "fs";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  const file = await fs.readFile(process.cwd() + "/app/quiz/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <div>
      <h1>{data.title}</h1>
      {data.questions.map(
        (question: {
          id: Key | null | undefined;
          question:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | Promise<AwaitedReactNode>
            | null
            | undefined;
          answers: any[];
          correctAnswer:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | Promise<AwaitedReactNode>
            | null
            | undefined;
        }) => (
          <div key={question.id}>
            <h3>{question.question}</h3>
            <ul>
              {question.answers.map((answer) => (
                <li key={answer}>{answer}</li>
              ))}
            </ul>
            <p>Correct Answer: {question.correctAnswer}</p>
          </div>
        )
      )}
    </div>
  );
}
