import "normalize.css";
import SignIn from "./routes/sign-in";
import { Box } from "@mui/material";
import styled from "styled-components";

const ContentStyle = styled(Box)`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const App = () => {
    return (
        <ContentStyle>
            <SignIn></SignIn>
        </ContentStyle>
    );
};

export default App;
