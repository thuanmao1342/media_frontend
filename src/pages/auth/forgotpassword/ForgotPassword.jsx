import React from 'react';
import styles from './forgotpassword.module.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Checkbox, Stack, TextField, Typography } from '@mui/material';

const schema = yup.object({
    email: yup.string().email("Email must be a valid email").required("Email is required!").trim(),
}).required();

export default function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();
    const onSubmit = data => {
        navigate("/");
        console.log(data);
    }

    return (
        <Box>
            <Grid container spacing={0} direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={7}>
                    <div className={styles.bg_img}>
                    </div>
                </Grid>
                <Grid item xs={5} className={styles.form}>
                    <Typography variant='h3'>Sign in</Typography>
                    <Box sx={{ p: 6 }}>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.from_login}>
                            <Stack spacing={4}>
                                <TextField
                                    {...register("email")}
                                    error={errors.email ? true : false}
                                    id="email"
                                    label="Email"
                                    fullWidth
                                    helperText={errors.email?.message}
                                    required
                                />
                            </Stack>
                            <div className={styles.footer_form}>
                                <div className={styles.link}>
                                    <Checkbox {...register("remember")} defaultChecked /> <label>Remember me</label>
                                </div>
                                <Button type='submit' variant="contained">
                                    Login
                                </Button>
                                <Typography variant='body2'>
                                    Don't have an account? <a href='/register'>Sign up</a>
                                </Typography>
                            </div>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}
