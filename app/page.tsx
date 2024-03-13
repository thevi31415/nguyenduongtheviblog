import Image from "next/image";
import { getSheetsData } from "./_lib/readSheet";
interface Data {
  name: string;
  summary: string;
}

export default async function Home() {
  const data: Data[] = await getSheetsData();
  const { name, summary } = data[0];
  console.log("data: " + data);

  return (
    <div>
      <h1>
        {name}
        <br />
        {summary}
      </h1>
    </div>
  );
}
