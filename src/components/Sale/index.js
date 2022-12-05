import { Container, Box, Test } from "./style";
import { sales } from "../../data/data";

export default function Sale() {
  return (
    <Container>
      {sales.map((s, i) => {
        return (
          <Box key={i}>
            <h2>{s.title}</h2>
            <h1>{s.value}</h1>
            <Test color={s.percentage[0]}>{s.percentage}</Test>
            {console.log(s.percentage[0])}
          </Box>
        );
      })}
    </Container>
  );
}
