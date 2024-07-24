import { useState } from "react";
import { Link } from "react-router-dom";

function New() {
  return(
    <div>
      <h1>새 컬러 등록하기</h1>
      <Link to="/">
        <img src="/images/x.svg" alt="취소" />
      </Link>
      <h2>MBTI</h2>
      <h2>컬러</h2>
      <img src="/images/repeat.svg" alt="랜덤" />
      <input name="colorCode" />
      <button>컬러 등록</button>
    </div>
  );
}

export default New;