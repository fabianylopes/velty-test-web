import styled from "styled-components";

const Box = styled.div`
  width: 644px;
  height: 61px;
  background-color: #fff;
  padding: 10px 16px 10px 30px;
  box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
  border-radius: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 150px;
  right: 22px;

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
  background-color: rgba(244, 247, 254, 1);
  border-radius: 49px;

  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 100px;
    height: 20px;
    border: none;
    background-color: rgba(244, 247, 254, 1);
    color: rgba(143, 155, 186, 1);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

export { Box, Input };
