import "./App.css";
import DiaryEditor from "./Components/DiaryEditor";
import DiaryList from "./Components/DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이정환 1",
    content: "하이 1",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "아무개 1",
    content: "하이 2",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "홍길동",
    content: "하이 3",
    emotion: 4,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
