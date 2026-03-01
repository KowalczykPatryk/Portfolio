import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

type Notification = {
    open: boolean;
    message: string;
    severity: "success" | "info" | "warning" | "error";
};

function Home(): React.JSX.Element
{

    const [notification, setNotification] = useState<Notification>({
        open: false,
        message: "",
        severity: "success"
    });

    return (
        <>
            <Snackbar
            open={notification.open}
            autoHideDuration={3000}
            onClose={() => setNotification({...notification, open: false})}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert 
                onClose={() => setNotification({...notification, open: false})} 
                severity={notification.severity} 
                variant="filled"
                >
                    {notification.message}
                </Alert>
            </Snackbar>
        </>
    );
}

export default Home;