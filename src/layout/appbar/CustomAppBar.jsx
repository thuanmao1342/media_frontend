import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CustomAppBar = () => {
  const [t, i18n] = useTranslation("common");
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const settings = {
    title: "Account",
    icon: <Avatar>A</Avatar>,
    items: [
      {
        title: t("common:header.profile"),
        icon: <Avatar>P</Avatar>,
        link: "/profile",
      },
      {
        title: t("common:settings.settings"),
        icon: <Avatar>S</Avatar>,
        link: "/settings",
      },
      {
        title: t("common:header.logout"),
        icon: <Avatar>S</Avatar>,
        link: "/signout",
      },
    ],
  };

  const lng = localStorage.getItem("LANGUAGE");
  const [language, setLanguage] = React.useState(lng);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logUot = () => {
    setAnchorElUser(null);
    localStorage.removeItem("CURRENT_USER");
    window.location.href = "/login";
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("LANGUAGE", event.target.value);
    document.title = t("common:app_name");
  };
  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        </Box>
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem>
              <select value={language} onChange={handleChangeLanguage}>
                <option value={"en"}>{t("common:language.en")}</option>
                <option value={"vi"}>{t("common:language.vi")}</option>
              </select>
            </MenuItem>
            {settings.items.map((setting) => (
              <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                {setting.link === "/signout" ? (
                  <Button variant="text" color="warning" onClick={logUot}>
                    {setting.title}
                  </Button>
                ) : (
                  <Button component={Link} to={setting.link}>
                    {setting.title}
                  </Button>
                )}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  );
};
export default CustomAppBar;
