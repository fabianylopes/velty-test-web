import { Box, Input, Buttons } from "./style";
import Search from "../../assets/icons/search.svg";
import Bell from "../../assets/icons/alert.svg";
import Moon from "../../assets/icons/darkmode.svg";
import Info from "../../assets/icons/info.svg";
import Userpic from "../../assets/img/user.svg";

export default function RightMenu() {
  return (
    <Box>
      <Input>
        <img src={Search} alt="" />
        <input type="text" placeholder="Busca"></input>
      </Input>
      <Buttons>
        <img src={Bell} alt="" />
        <img src={Moon} alt="" />
        <img src={Info} alt="" />
      </Buttons>
      <img src={Userpic} alt="" />
    </Box>
  );
}
