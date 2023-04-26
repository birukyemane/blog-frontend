import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const ContainerCenter = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box sx={{ margin: 5 }}>{children}</Box>
    </Container>
  );
};

export default ContainerCenter;
