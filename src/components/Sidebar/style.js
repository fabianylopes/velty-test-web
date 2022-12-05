import styled from "styled-components";

const Container = styled.div`
  width: 290px;
  height: 1152px;
  background-color: #fff;
  padding: 27px 34px;
  position: fixed;
  top: 0;
  left: 0;

  img {
    margin-bottom: 60px;
  }
`;

const Menu = styled.div`
  width: 100%;
`;

const Box = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
`;

const Text = styled.h2`
  color: #2b3674;
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
`;

export { Container, Menu, Text, Box };
