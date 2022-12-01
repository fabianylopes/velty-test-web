import styled from "styled-components";

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Container>
      <Sidebar />
      <Dashboard />
    </Container>
  );
}

export default App;

const Container = styled.div``;
