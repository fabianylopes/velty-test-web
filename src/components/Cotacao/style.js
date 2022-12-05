import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Box = styled.div`
  width: 387px;
  height: 196px;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    color: #05cd99;
  }
`;

const Info = styled.div`
  width: 100%;
  height: 96px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #2b3674;
  }
  h2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #a3aed0;
  }
`;

export { Container, Box, Info };
