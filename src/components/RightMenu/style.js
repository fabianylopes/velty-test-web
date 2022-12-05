import styled from "styled-components";

const Box = styled.div`
  width: 422px;
  height: 61px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
  border-radius: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    border-radius: 50%;
  }
`;

const Input = styled.div`
  width: 214px;
  height: 41px;
  padding: 15px;
  background-color: #f4f7fe;
  border-radius: 49px;

  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 100px;
    height: 20px;
    border: none;
    background-color: #f4f7fe;
    color: #8f9bba;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;

export { Box, Input, Buttons };
