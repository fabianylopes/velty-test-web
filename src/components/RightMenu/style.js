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
  position: absolute;
  top: 65px;
  right: 22px;

  img {
    border-radius: 50%;
  }
`;

const Input = styled.div`
  width: 214px;
  height: 41px;
  padding: 15px;
  background-color: rgba(244, 247, 254, 1);
  border-radius: 49px;

  display: flex;
  gap: 10px;

  input {
    border: none;
    background-color: rgba(244, 247, 254, 1);
    color: rgba(143, 155, 186, 1);
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
