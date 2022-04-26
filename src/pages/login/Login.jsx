import React from 'react';
import styles from './login.module.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Checkbox, Stack, TextField } from '@mui/material';

const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
}).required();

export default function Login() {
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
        <Grid item xs={5}>
          <h3>Sign in</h3>
          <Box sx={{ p: 6 }}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.from_login}>
              <Stack spacing={4}>
                <TextField
                  {...register("username")}
                  error={errors.username ? true : false}
                  id="username"
                  label="UserName"
                  fullWidth
                  helperText={errors.username?.message}
                  required
                />
                <TextField
                  {...register("password")}
                  error={errors.password ? true : false}
                  id="password"
                  label="password"
                  fullWidth
                  helperText={errors.password?.message}
                  required
                />
              </Stack>
              <div className={styles.footer_form}>
                <Checkbox {...register("remember")} defaultChecked /> <label>Remember me</label>
                <Button type='submit' variant="contained">
                Login
              </Button>
            </div>
          </form>
        </Box>
      </Grid>
    </Grid>
    </Box >
  )
}
