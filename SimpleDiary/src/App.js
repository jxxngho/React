import { useState, useRef, useEffect } from "react";
import "./App.css";
import DiaryEditor from "./Components/DiaryEditor";
import DiaryList from "./Components/DiaryList";

// https://jsonplaceholder.typicode.com/comments

const App = () => {
  const [data, setData] = useState([]); // 일기 데이터 저장

  const dataId = useRef(0);

  const getData = async () => {
    // promise를 반환하는 비동기함수
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);
  const onCreate = (author, content, emotion) => {
    // 일기 데이터 추가하는 함수
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
};

export default App;
