import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Box = styled.div`
  width: 249px;
  height: 95px;
  padding-left: 22px;
  background-color: #fff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

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

const Test = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  color: ${({ color }) => (color === "-" ? "#CD0505" : "#05CD99")};
`;

export { Container, Box, Test };
