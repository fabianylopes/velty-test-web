import styled from "styled-components";

export function balanceColor(tipo) {
  if (tipo === "Receita total") return "#ec7a7a";
  if (tipo === "Lucro total") return "#7A85EC";
  if (tipo === "Lucro por venda") return "#65D5AC";
}

const Container = styled.div`
  width: 380px;
  min-height: 310px;
  background-color: ${({ color }) => balanceColor(color)};
  border-radius: 20px;
  padding: 22px 16px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

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
    width: 100%;
    height: 0px;
    border: 1px solid #e9edf7;
  }
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 32px;
  color: #fff;
`;

export { Container, H1 };
