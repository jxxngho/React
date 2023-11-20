import { useRef, useState } from "react";

const DiaryEditor = () => {
  const authorInput = useRef();
  const contentInput = useRef();
  // useRef   -> html 요소 접근할 수 있게 해줌

  // 다이어리 에디터 컴포넌트가 인풋에 작성된 값을
  // 직접 핸들링할 수 있도록 만들어야함.
  // -->state 이용
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      //  e.target.name을 대괄호로 감싸는 이유 ->
      //   객체 리터럴을 이용해 객체를 만들 때 변수에 담긴 문자열을 key로 활용하려면 대괄호에 담아 사용해야 함.
    });
  };

  const handleSumbit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      // 현재 가리키는 값을 current라는 프로퍼티로 불러와서 사용가능
      return;
    }

    if (state.content.length < 1) {
      contentInput.current.focus();
      return;
    }

    alert("저장 성공 ");
  };
  return (
    <div className="DiaryEditor">
      <h2> 오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
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
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        {/* 감정점수 표현 */}
        오늘의 감정점수 :
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSumbit}>일기 저장하기</button>
      </div>
    </div>
  );
  // 클래스이름가지고 css할때 컴포넌트와 클래스이름
  // 일치시키면 좀 더 직관적으로 보여주기 위해서
};

export default DiaryEditor;
