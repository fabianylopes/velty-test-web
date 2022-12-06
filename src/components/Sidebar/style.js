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
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Box = styled.div`
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  gap: 14px;
`;

const Text = styled.h2`
  color: #a3aed0;
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
`;

export { Container, Menu, Text, Box };
