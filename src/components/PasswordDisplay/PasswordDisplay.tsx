import {useStore} from "../../store/useStore.ts"
import {Box, Typography} from "@mui/material";
import {useEffect} from "react";

export const PasswordDisplay = () => {
    const {password, isAccessGranted, isChecked} = useStore();
    const display = password.replace(/./g, "*")
    const message = password && isAccessGranted ? "Access accepted" : password && !isAccessGranted ? "Access denied." : "Access denied.";
    useEffect(() => {
        if (isChecked && isAccessGranted) {
            const audio = new Audio('../winSound.wav');
            audio.play().catch((error) => console.log('Ошибка воспроизведения:', error));
        }
    }, [isChecked, isAccessGranted]);

    return (
        <Box
            sx={{
                width: "200px",
                padding: 2,
                textAlign: "center",
                backgroundColor: isChecked ? isAccessGranted ? 'lightgreen' : 'lightcoral' : 'blue',
                borderRadius: 2,
                mb: 2,
            }}
        >
            <Typography variant="h6">{display || "Введите пароль"}</Typography>
            {message && <Typography variant="body2" color="white">{message}</Typography>}
        </Box>
    )
}
