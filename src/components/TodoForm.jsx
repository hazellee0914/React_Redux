import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../redux/modules/todos";
// import { addTodo } from "../redux/modules/todos";

const Form = () => {
  const { todos } = useSelector((state) => state.todos);

  // react-id-generator의 모듈을 이용해 우리는 새로운 id를 발급해주려고 합니다.

  const dispatch = useDispatch();
  // 그리고 dispatch라는 변수를 이용해 useDispatch 모듈을 사용할 수 있도록 설정했어요.

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    const id = Number(nextId().trim("id")[2]);
    event.preventDefault();

    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    console.log("id is : ", id);
    dispatch(addTodo({ ...todo, id }));

    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };
  return (
    <>
      <StAddForm onSubmit={onSubmitHandler}>
        <StInputGroup>
          <StFormLabel>제목</StFormLabel>
          <StAddInput
            type="text"
            name="title"
            value={todo.title}
            onChange={onChangeHandler}
          />
          <StFormLabel>내용</StFormLabel>
          <StAddInput
            type="text"
            name="body"
            value={todo.body}
            onChange={onChangeHandler}
          />
        </StInputGroup>
        <StAddButton>추가하기</StAddButton>
      </StAddForm>
    </>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #f8c9c9;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #cf85af;
  width: 140px;
  color: #f1cbe3;
  font-weight: 700;
`;
