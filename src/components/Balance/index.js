import { Container, H1 } from "./style";
import { balance } from "../../data/data";

export default function Balance() {
  return (
    <>
      {balance.map((b, i) => {
        return (
          <Container color={b.tipo} key={i}>
            <img src={b.icon} alt="" />
            <H1>R$ {b.valor.toFixed(2)}</H1>
            <h2>{b.tipo}</h2>
            <div></div>
            <h3>R$ {b.media.toFixed(2)}</h3>
            <h4>Média por cliente</h4>
          </Container>
        );
      })}
    </>
  );
}
