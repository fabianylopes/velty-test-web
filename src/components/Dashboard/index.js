import Balance from "../Balance";
import Cotacao from "../Cotacao";
import DashboardMenu from "../DashboardMenu";
import Plans from "../Plans";
import RightMenu from "../RightMenu";
import Sale from "../Sale";
import { Container, H1, H2, Header, Body } from "./style";

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
      <Body>
        <Balance />
        <Sale />
        <Cotacao />
        <Plans />
      </Body>
    </Container>
  );
}
