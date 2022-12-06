import styled from "styled-components";

const Container = styled.div`
  overflow-y: scroll;
  width: 100%;
  min-height: 100vh;
  padding: 50px 20px 30px 310px;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export { Container, Body, H1, H2, Header };
