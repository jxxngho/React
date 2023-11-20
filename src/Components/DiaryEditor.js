import { useState } from "react";

const DiaryEditor = () => {
  // 다이어리 에디터 컴포넌트가 인풋에 작성된 값을
  // 직접 핸들링할 수 있도록 만들어야함.
  // -->state 이용
  const [state, setState] = useState({
    author: "",
    content: "",
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.targt.value,
    });
  };
  return (
    <div className="DiaryEditor">
      <h2> 오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
          // onChange 이벤트 -> 여기선 사람이 input 태그에 입력하는 것
          // 값이 바뀌었을 때 수행하는 이벤트
          // input의 값이 바뀌었을때 onChange에 전달한
          // callback 함수를 수행한다.

          // e.target.value --> author가 변화해야하는 값
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
    </div>
  );
  // 클래스이름가지고 css할때 컴포넌트와 클래스이름
  // 일치시키면 좀 더 직관적으로 보여주기 위해서
};

export default DiaryEditor;
