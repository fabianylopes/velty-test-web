import { Container, Menu, Text, Box } from "./style";
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
        <Box>
          <div>
            <img src={Dashboard} alt="logo" />
          </div>
          <Text>Dashboard</Text>
        </Box>
        <Box>
          <div>
            <img src={Vendas} alt="logo" />
          </div>
          <Text>Vendas</Text>
        </Box>
        <Box>
          <div>
            <img src={Relatorios} alt="logo" />
          </div>
          <Text>Relatórios</Text>
        </Box>
        <Box>
          <div>
            <img src={Lojas} alt="logo" />
          </div>
          <Text>Lojas parceiras</Text>
        </Box>
        <Box>
          <div>
            <img src={Clientes} alt="logo" />
          </div>
          <Text>Clientes</Text>
        </Box>
      </Menu>
    </Container>
  );
}
