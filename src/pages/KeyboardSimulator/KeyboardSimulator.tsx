import { PasswordDisplay } from "../../components/PasswordDisplay/PasswordDisplay.tsx";
import { Keypad } from "../../components/Keypad/Keypad.tsx";
import { Box } from "@mui/material";

export const KeyboardSimulator = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <PasswordDisplay />
            <Keypad />
        </Box>
    );
};