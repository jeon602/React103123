import Box, { color } from "./MyComp1101/Box";
import Container, { color as containercolor } from "./MyComp1101/Container";
function App() {
  return (
    <div>
      <Box style={{ color: color }} />
      <Container style={{ color: containercolor }} />
    </div>
  );
}
export default App;
