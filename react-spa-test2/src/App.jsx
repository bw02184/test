import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState("Loading");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://3.35.216.158:8080/hello"); // API 요청
        const data = await response.json(); // 응답을 JSON으로 변환
        console.log(data); // 데이터를 콘솔에 출력
        setRandomNumber(data); // 데이터를 상태에 저장
      } catch (error) {
        setRandomNumber("Error loading number"); // 오류 처리
      }
    };

    fetchData(); // 비동기 함수 호출
  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>{randomNumber.name}</h1>
      <h1>{randomNumber.password}</h1>

      {/* <h1>{randomNumber.password}</h1> */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
