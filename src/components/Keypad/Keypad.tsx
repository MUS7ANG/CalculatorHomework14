import { useStore } from "../../store/useStore";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export const Keypad = () => {
    const { handleAdd, handleRemove, handleCheck } = useStore();

    const keys: (string | number)[] = [7, 8, 9, 4, 5, 6, 1, 2, 3, "<", 0, "E"];

    return (
        <Grid container spacing={1} sx={{ maxWidth: "220px" }}>
            {keys.map((key) => (
                <Grid key={String(key)}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ height: "50px" }}
                        onClick={() =>
                            key === "<" ? handleRemove() : key === "E" ? handleCheck() : handleAdd(String(key))
                        }
                    >
                        {key}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};