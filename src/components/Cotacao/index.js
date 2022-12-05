import { Container, Box, Info } from "./style";
import Dollar from "../../assets/icons/dollar.svg";
import { cotacoes } from "../../data/data";

export default function Cotacao() {
  return (
    <Container>
      {cotacoes.map((c, i) => {
        return (
          <Box key={i}>
            <img src={Dollar} alt="" />
            <Info>
              <h1>{c.valor}</h1>
              <h2>{c.tipo}</h2>
            </Info>
            <p>{c.percentagem}</p>
          </Box>
        );
      })}
    </Container>
  );
}
