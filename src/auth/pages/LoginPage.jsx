import { Alert, Button, Grid, TextField } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks"

import { login, logout } from "../../store/auth";
import { LoginLayout } from "../layout/LoginLayout"

const formData = {
    username: '',
    password: ''
};

export const LoginPage = () => {

    const { errorMessage } = useSelector(state => state.auth);

    const { username, password, onInputChange } = useForm(formData);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', true);
            dispatch(login())
        } else {
            dispatch(logout('Usuario no registrado'))
        }
    }

    return (
        <LoginLayout title='Login'>
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Username"
                            type="text"
                            placeholder="admin"
                            fullWidth
                            name="username"
                            value={username}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="admin"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid
                        container
                        display={!!errorMessage ? '' : 'none'}
                        sx={{ mt: 1 }}
                    >
                        <Grid
                            item
                            xs={12}
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={12}>
                            <Button
                                // disabled={isAuthenticating}
                                // sx={{ backgroundColor: "secondary.main" }}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </LoginLayout>


    )
}
