import { Container } from "./style";
import Dollar from "../../assets/icons/dollar-pink.svg";

export default function Balance() {
  return (
    <Container>
      <img src={Dollar} alt="" />
      <h1>R$ 312.321,00</h1>
      <h2>Receita total</h2>
      <div></div>
      <h3>R$ 67,20</h3>
      <h4>Média por cliente</h4>
    </Container>
  );
}
