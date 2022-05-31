import React from 'react';
import styles from './register.module.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Checkbox, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';

const schema = yup.object({
  username: yup.string().required("Username is required!").trim(),
  password: yup.string().required("Password is required!").trim().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^ ]{6,20}$/, "Password must be at least 6 characters, contain at least one lowercase letter, one uppercase letter and one number!"),
  passwordConfirmation: yup.string().required("Confirm password is required!").oneOf([yup.ref("password"), null], "Passwords must match!"),
  gender: yup.string().required("Gender is required!"),
}).required();

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const onSubmit = data => {
    navigate("/");
    console.log(data);
  }

  const [checkTos, setCheckTos] = React.useState(true);

  const handleCheckTos = (event) => {
    setCheckTos(!event.target.checked);
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
          <Typography variant='h3'>Sign up</Typography>
          <Box sx={{ p: 6 }}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.from_login}>
              <Stack spacing={4}>
                <TextField
                  {...register("fullname")}
                  error={errors.username ? true : false}
                  id="Fullname"
                  label="Fullrname"
                  fullWidth
                  helperText={errors.username?.message}
                  required
                />
                <FormControl fullWidth error={errors.gender ? true : false}>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    {...register("gender")}
                    label="Gender"
                  >
                    <MenuItem value={1}>Male</MenuItem>
                    <MenuItem value={0}>Female</MenuItem>
                    <MenuItem value={3}>Other</MenuItem>
                  </Select>
                  <FormHelperText>{errors.gender?.message}</FormHelperText>
                </FormControl>
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
                  fullWidth
                  helperText={errors.password?.message}
                  required
                />
                <TextField
                  {...register("passwordConfirmation")}
                  error={errors.passwordConfirmation ? true : false}
                  id="passwordConfirmation"
                  label="Confirm Password"
                  fullWidth
                  helperText={errors.passwordConfirmation?.message}
                  required
                />
              </Stack>
              <div className={styles.footer_form}>
                <Checkbox onChange={handleCheckTos} defaultChecked={false} /> <label>I agree all statements in <a href="/terms_of_service">Terms of service</a></label>
                <div className={styles.footer_form_btn}>
                  <Button type='submit' variant="contained" disabled={checkTos}>
                    Register
                  </Button>
                  <Button variant='outlined' href='/login'>
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box >
  )
}
