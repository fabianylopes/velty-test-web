import styled from "styled-components";

const Container = styled.div`
  width: 380px;
  height: 310px;
  background-color: #ec7a7a;
  padding: 22px 16px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 32px;
    color: #fff;
  }
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: #fff;
  }
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #fff;
  }
  h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #fff;
  }

  div {
    width: 387px;
    height: 0px;
    border: 1px solid #e9edf7;
  }
`;

export { Container };
