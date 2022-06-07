import React from 'react';
import styles from './login.module.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Checkbox, Stack, TextField, Typography } from '@mui/material';

const schema = yup.object({
  username: yup.string().required("Username is required!").trim(),
  password: yup.string().required("Password is required!").trim().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^ ]{6,20}$/, "Password must be at least 6 characters, contain at least one lowercase letter, one uppercase letter and one number!"),
}).required();

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const onSubmit = data => {
    localStorage.setItem('CURRENT_USER', 'Bearer ' + data.username);
    navigate("/");
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
                  {...register("username")}
                  error={errors.username ? true : false}
                  id="username"
                  label="Email or username"
                  fullWidth
                  helperText={errors.username?.message}
                  required
                />
                <TextField
                  {...register("password")}
                  error={errors.password ? true : false}
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  helperText={errors.password?.message}
                  required
                />
              </Stack>
              <div className={styles.footer_form}>
                <div className={styles.link}>
                  <div>
                    <Checkbox {...register("remember")} defaultChecked /> <label>Remember me</label>
                  </div>
                  <a href='/forgot-password'>forgot password</a>
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
