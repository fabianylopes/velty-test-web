import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Box = styled.div`
  width: 516px;
  height: 350px;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 20px;
`;

const Top = styled.div`
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

const Bottom = styled.div`
  width: 100%;
  height: 254px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #a3aed0;
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #a3aed0;
  }
  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #2b3674;
  }
`;

export { Container, Box, Top, Bottom, Title };
