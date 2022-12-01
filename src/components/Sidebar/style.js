import styled from "styled-components";

const Container = styled.div`
  width: 290px;
  height: 1152px;
  background-color: #fff;
  padding: 27px 34px;

  img {
    margin-bottom: 60px;
  }
`;

const Menu = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 14px;
  }
`;

const Text = styled.h2`
  color: rgba(43, 54, 116, 1);
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
`;

export { Container, Menu, Text };
