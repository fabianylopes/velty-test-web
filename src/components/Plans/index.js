import { Container, Box, Top, Bottom, Title } from "./style";
import { planos, categorias, tiposDePlanos } from "../../data/data";

export default function Plans() {
  return (
    <Container>
      <Box>
        {planos.map((p, i) => {
          return (
            <div key={i}>
              <Top>
                <h1>{p.title}</h1>
                <h2>{p.subTitle}</h2>
              </Top>
              <Bottom>
                <Title>
                  <p>CLUBE</p>
                  <p>CLIENTES</p>
                  <p>PREÇO</p>
                </Title>
                {p.data.map((d, i) => {
                  return (
                    <Title key={i}>
                      <h3>{d.clube}</h3>
                      <h3>{d.clientes} clientes</h3>
                      <h3>R$ {d.precoMedio.toFixed(2)}</h3>
                    </Title>
                  );
                })}
              </Bottom>
            </div>
          );
        })}
      </Box>
      <Box>
        {categorias.map((c, i) => {
          return (
            <div key={i}>
              <Top>
                <h1>{c.title}</h1>
                <h2>{c.subTitle}</h2>
              </Top>
              <Bottom>
                <Title>
                  <p>CLUBE</p>
                  <p>CLIENTES</p>
                  <p>PREÇO MÉDIO</p>
                </Title>
                {c.data.map((d, i) => {
                  return (
                    <Title key={i}>
                      <h3>{d.clube}</h3>
                      <h3>{d.clientes} clientes</h3>
                      <h3>R$ {d.precoMedio.toFixed(2)}</h3>
                    </Title>
                  );
                })}
              </Bottom>
            </div>
          );
        })}
      </Box>
      <Box>
        {tiposDePlanos.map((t, i) => {
          return (
            <div key={i}>
              <Top>
                <h1>{t.title}</h1>
                <h2>{t.subTitle}</h2>
              </Top>
              <Bottom>
                <Title>
                  <p>CLUBE</p>
                  <p>CLIENTES</p>
                  <p>PREÇO MÉDIO</p>
                </Title>
                {t.data.map((d, i) => {
                  return (
                    <Title key={i}>
                      <h3>{d.clube}</h3>
                      <h3>{d.clientes} clientes</h3>
                      <h3>R$ {d.precoMedio.toFixed(2)}</h3>
                    </Title>
                  );
                })}
              </Bottom>
            </div>
          );
        })}
      </Box>
    </Container>
  );
}
