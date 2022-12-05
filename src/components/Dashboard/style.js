import styled from "styled-components";

const Container = styled.div`
  overflow-y: scroll;
  width: 100%;
  min-height: 100vh;
  padding: 50px 20px 30px 310px;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #2b3674;
`;

const H2 = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #707eae;
`;

const Header = styled.div`
  height: 290px;
`;

const Balances = styled.div`
  height: 310px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Sales = styled.div`
  height: 95px;
`;

const Cotacoes = styled.div`
  height: 196px;
`;

const Plans = styled.div`
  height: 350px;
`;

export { Container, H1, H2, Header, Balances, Sales, Cotacoes, Plans };
