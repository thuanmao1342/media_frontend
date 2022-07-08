import React, { Fragment } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Collapse, Divider, List, ListItemButton } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

function CustomMenuBar() {
  const menus = [
    {
      name: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      name: "Public",
      icon: <InboxIcon />,
      link: "",
      children: [
        {
          name: "Inbox",
          icon: <InboxIcon />,
          link: "/inbox",
        },
        {
          name: "Starred",
          icon: <MailIcon />,
          link: "/starred",
        },
        {
          name: "Sent Mail",
          icon: <MailIcon />,
          link: "/sent",
        },
        {
          name: "Drafts",
          icon: <MailIcon />,
          link: "/drafts",
        },
      ],
    },
    {
      name: "Private",
      icon: <InboxIcon />,
      link: "/private",
      children: [
        {
          name: "All mail",
          icon: <InboxIcon />,
          link: "/all",
        },
        {
          name: "Trash",
          icon: <MailIcon />,
          link: "/trash",
        },
        {
          name: "Spam",
          icon: <MailIcon />,
          link: "/spam",
        },
      ],
    },
  ];
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  // children node

  const ChildrenList = (item) => {
    const menus = item.item;
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(!open);
    };
    const [selected, setSelected] = React.useState(1);
    const handleItemClick = (index) => {
      setSelected(index);
    };
    return (
      <Fragment>
        <ListItem button aria-selected={true} onClick={handleClick}>
          <ListItemIcon>{menus.icon}</ListItemIcon>
          <ListItemText primary={menus.name} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse component="li" in={open} timeout="auto" unmountOnExit>
          <List disablePadding component="nav">
            {menus.children.map((item, index) => (
              <ListItemButton
                key={index}
                component={Link}
                to={menus.link + item.link}
                style={{ paddingLeft: 30 }}
                selected={selected === index}
                onClick={() => handleItemClick(index)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <List>
        {menus.map((item, index) => (
          <Fragment key={index}>
            {item.children ? (
              <ChildrenList item={item} />
            ) : (
              <ListItemButton
                component={Link}
                to={item.link}
                key={index}
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            )}
            {index < menus.length - 1 ? <Divider /> : null}
          </Fragment>
        ))}
      </List>
    </Fragment>
  );
}

export default CustomMenuBar;
