import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    async function dataget() {
      setData(await datafetch());
    }
    dataget();
  }, []);
  return (
    <div className="App">
      {Data.map((data) => {
        return <h1 key={data.id}>{data.title}</h1>;
      })}
    </div>
  );
}
export async function datafetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log("Data Get => ", data);
  return data;
}
