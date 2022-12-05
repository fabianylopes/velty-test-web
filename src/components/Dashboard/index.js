import Balance from "../Balance";
import Cotacao from "../Cotacao";
import DashboardMenu from "../DashboardMenu";
import Planos from "../Planos";
import RightMenu from "../RightMenu";
import Sale from "../Sale";
import {
  Container,
  H1,
  H2,
  Header,
  Balances,
  Sales,
  Cotacoes,
  Plans,
} from "./style";

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <div>
          <div className="title">
            <H2>Principal / Dashboard</H2>
            <H1>Velty Dashboard</H1>
          </div>
          <RightMenu />
        </div>
        <DashboardMenu />
      </Header>
      <Balances>
        <Balance />
      </Balances>
      <Sales>
        <Sale />
      </Sales>
      <Cotacoes>
        <Cotacao />
      </Cotacoes>
      <Plans>
        <Planos />
      </Plans>
    </Container>
  );
}
