import React from "react";
import styles from "./register.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const schema = yup
  .object({
    username: yup.string().required("Username is required!").trim(),
    password: yup
      .string()
      .required("Password is required!")
      .trim()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^ ]{6,20}$/,
        "Password must be at least 6 characters, contain at least one lowercase letter, one uppercase letter and one number!"
      ),
    passwordConfirmation: yup
      .string()
      .required("Confirm password is required!")
      .oneOf([yup.ref("password"), null], "Passwords must match!"),
    gender: yup.string().required("Gender is required!"),
  })
  .required();

export default function Register() {
  const [t, i18n] = useTranslation("common");

  const lgn = localStorage.getItem("LANGUAGE");

  const [language, setLanguage] = React.useState(lgn);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/");
    console.log(data);
  };

  const [checkTos, setCheckTos] = React.useState(true);

  const handleCheckTos = (event) => {
    setCheckTos(!event.target.checked);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("LANGUAGE", event.target.value);
    document.title = t("common:app_name");
  };
  return (
    <Box>
      <div className={styles.register}>
        <div className={styles.bg_img__div}>
          <div className={styles.bg_img}></div>
        </div>
        <div className={styles.form}>
          <Typography variant="h3">{t("common:register.register")}</Typography>
          <Box sx={{ p: 2, pt: 5, pb: 5 }}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.from_login}
            >
              <Stack spacing={4}>
                <TextField
                  {...register("fullname")}
                  error={errors.username ? true : false}
                  id="Fullname"
                  label={t('common:register.name')}
                  fullWidth
                  helperText={errors.username?.message}
                  required
                />
                <FormControl fullWidth error={errors.gender ? true : false}>
                  <InputLabel>{t('common:register.gender')}</InputLabel>
                  <Select {...register("gender")} label="Gender">
                    <MenuItem value={"1"}>
                      {t("common:register.male")}
                    </MenuItem>
                    <MenuItem value={"0"}>
                      {t("common:register.female")}
                    </MenuItem>
                    <MenuItem value={"3"}>
                      {t("common:register.other")}
                    </MenuItem>
                  </Select>
                  <FormHelperText>{errors.gender?.message}</FormHelperText>
                </FormControl>
                <TextField
                  {...register("username")}
                  error={errors.username ? true : false}
                  id="username"
                  label={t("common:register.email_placeholder")}
                  fullWidth
                  helperText={errors.username?.message}
                  required
                />
                <TextField
                  {...register("password")}
                  error={errors.password ? true : false}
                  id="password"
                  label={t("common:register.password_placeholder")}
                  fullWidth
                  helperText={errors.password?.message}
                  required
                />
                <TextField
                  {...register("passwordConfirmation")}
                  error={errors.passwordConfirmation ? true : false}
                  id="passwordConfirmation"
                  label={t("common:register.confirm_password_placeholder")}
                  fullWidth
                  helperText={errors.passwordConfirmation?.message}
                  required
                />
              </Stack>
              <div className={styles.footer_form}>
                <Checkbox onChange={handleCheckTos} defaultChecked={false} />{" "}
                <label>
                  {t("common:register.i_agree")} {" "}
                  <a href="/terms_of_service">
                    {t("common:register.terms_of_service")}
                  </a>
                </label>
                <div className={styles.footer_form_btn}>
                  <Button type="submit" variant="contained" disabled={checkTos}>
                    {t("common:register.register_button")}
                  </Button>
                  <Button variant="outlined" href="/login">
                    {t("common:register.login")}
                  </Button>
                </div>
              </div>
            </form>
          </Box>
        </div>
        <div className={styles.language}>
          <select value={language} onChange={handleChangeLanguage}>
            <option value="vi">{t("common:language.vi")}</option>
            <option value="en">{t("common:language.en")}</option>
          </select>
        </div>
      </div>
    </Box>
  );
}
