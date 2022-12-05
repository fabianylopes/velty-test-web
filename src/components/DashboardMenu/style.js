import styled from "styled-components";

const Box = styled.div`
  width: 644px;
  height: 61px;
  background-color: #fff;
  padding: 10px 16px 10px 30px;
  margin-top: 50px;
  box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
  border-radius: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #707eae;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
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

export { Box, Input };
