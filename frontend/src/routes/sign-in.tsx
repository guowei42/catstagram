import { Box, Button, Card, FormControl, TextField } from "@mui/material";
import styled from "styled-components";

const SignInComponent = styled(Box)`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    max-width: 350px;

    & .sign-in-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & .center-image {
        width: 175px;
        margin: 36px 0px 12px 0px;
    }
`;

const FormComponentStyle = styled(FormControl)``;

const SignIn = () => {
    return (
        <>
            <SignInComponent>
                <Card className="sign-in-card">
                    <Box
                        className="center-image"
                        component="img"
                        src="../../assets/Catstagram-02-09-2024.png"
                    />
                    <FormComponentStyle>
                        <TextField placeholder="Phone number, username or email" />
                        <TextField placeholder="Password" type="password" />
                    </FormComponentStyle>
                    <Button variant="contained">Log In</Button>
                </Card>
            </SignInComponent>
        </>
    );
};

export default SignIn;
