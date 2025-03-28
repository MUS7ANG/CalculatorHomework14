import {useStore} from "../../store/useStore.ts"
import {Box, Typography} from "@mui/material";

export const PasswordDisplay = () => {
    const {password, isAccessGranted} = useStore();
    const display = password.replace(/./g, "*")
    const message = password && isAccessGranted ? "Access accepted" : password && !isAccessGranted ? "Access denied." : "Access denied.";

    return (
        <Box
            sx={{
                width: "200px",
                padding: 2,
                textAlign: "center",
                backgroundColor: password ? (isAccessGranted ? "green" : "red") : "blue",
                borderRadius: 2,
                mb: 2,
            }}
        >
            <Typography variant="h6">{display || "Введите пароль"}</Typography>
            {message && <Typography variant="body2" color="white">{message}</Typography>}
        </Box>
    )
}
