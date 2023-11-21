import { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./Components/DiaryEditor";
import DiaryList from "./Components/DiaryList";

// const dummyList = [
//   {
//     id: 11,
//     author: "이정환 1",
//     content: "하이 1",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 22,
//     author: "아무개 1",
//     content: "하이 2",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 33,
//     author: "홍길동",
//     content: "하이 3",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId); // 타겟 아이디를 포함하지 않은 리스트로만
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
