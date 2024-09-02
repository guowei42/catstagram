import "normalize.css";
import SignIn from "./routes/sign-in";
import { Box } from "@mui/material";

const App = () => {
    return (
        <Box
            height="100vh"
            display="flex"
            flexDirection="column"
        >
            <SignIn></SignIn>
        </Box>
    );
};

export default App;
