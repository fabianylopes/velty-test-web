import { Container, Menu, Text, Box } from "./style";
import Logo from "../../assets/img/logo.svg";
import sidebarMenu from "../../data/sidebar";

export default function Sidebar() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Menu>
        {sidebarMenu.map((s, i) => {
          return (
            <Box key={i}>
              <img src={s.icon} alt="" />
              <Text>{s.text}</Text>
            </Box>
          );
        })}
      </Menu>
    </Container>
  );
}
