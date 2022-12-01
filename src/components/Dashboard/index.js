import Balance from "../Balance";
import DashboardMenu from "../DashboardMenu";
import RightMenu from "../RightMenu";
import { Container } from "./style";

export default function Dashboard() {
  return (
    <Container>
      <DashboardMenu />
      <RightMenu />
      <Balance />
    </Container>
  );
}
