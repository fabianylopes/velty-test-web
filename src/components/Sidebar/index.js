import { Container, Menu, Text } from "./style";
import Logo from "../../assets/img/logo.svg";
import Dashboard from "../../assets/icons/home.svg";
import Vendas from "../../assets/icons/sales.svg";
import Relatorios from "../../assets/icons/infos.svg";
import Lojas from "../../assets/icons/stores.svg";
import Clientes from "../../assets/icons/user.svg";

export default function Sidebar() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Menu>
        <div>
          <img src={Dashboard} alt="logo" />
          <Text>Dashboard</Text>
        </div>
        <div>
          <img src={Vendas} alt="logo" />
          <Text>Vendas</Text>
        </div>
        <div>
          <img src={Relatorios} alt="logo" />
          <Text>Relatórios</Text>
        </div>
        <div>
          <img src={Lojas} alt="logo" />
          <Text>Lojas parceiras</Text>
        </div>
        <div>
          <img src={Clientes} alt="logo" />
          <Text>Clientes</Text>
        </div>
      </Menu>
    </Container>
  );
}
