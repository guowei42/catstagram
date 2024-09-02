import {
    Box,
    Button,
    Card,
    Divider,
    FormControl,
    Stack,
    TextField,
} from "@mui/material";
import "./styles/sign-in.css";

const SignIn = () => {
    return (
        <Box
            display="flex"
            flex="1 1 auto"
            alignItems="center"
            justifyContent="center"
        >
            <Card id="sign-in-card">
                <Stack spacing={2} width="250px">
                    <div id="center-image">
                        <Box
                            component="img"
                            src="../../assets/Catstagram-02-09-2024.png"
                            width="175px"
                        />
                    </div>
                    <FormControl>
                        <TextField placeholder="Phone number, username or email" />
                    </FormControl>
                    <FormControl>
                        <TextField placeholder="Password" type="password" />
                    </FormControl>
                    <Button variant="contained">Log In</Button>

                    <Divider>OR</Divider>
                </Stack>
            </Card>
        </Box>
    );
};

export default SignIn;
