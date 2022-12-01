import { Box, Input } from "./style";
import Date from "../../assets/icons/date.svg";

export default function DashboardMenu() {
  return (
    <Box>
      <p>Filtrar por data</p>
      <Input>
        <img src={Date} alt="" />
        <input type="text" placeholder="Data inicial"></input>
      </Input>
      <Input>
        <img src={Date} alt="" />
        <input type="text" placeholder="Data final"></input>
      </Input>
    </Box>
  );
}
