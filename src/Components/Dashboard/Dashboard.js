import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../Assets/Images/logo.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";
import PeopleIcon from "@mui/icons-material/People";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import CategoryIcon from "@mui/icons-material/Category";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import clock from '../../Assets/Images/clock.svg'
import grid from '../../Assets/Images/grid.svg'
import favourite from '../../Assets/Images/favourite.svg';
import inbox from '../../Assets/Images/inbox.svg';
import orderlist from '../../Assets/Images/orderlist.svg';
import product from '../../Assets/Images/stock.svg';
import pricing from '../../Assets/Images/pricing.svg';
import calender from '../../Assets/Images/calender.svg';
import todo from '../../Assets/Images/todo.svg';
import contact from '../../Assets/Images/contact.svg';
import invoice from '../../Assets/Images/invoice.svg';
import ui from '../../Assets/Images/ui elements.svg';
import team from '../../Assets/Images/team.svg';
import table from '../../Assets/Images/table.svg';
import setting from '../../Assets/Images/settings.svg';
import logout from '../../Assets/Images/logout.svg';
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const navItems = [
    { text: "Dashboard", icon: <img src={clock} />, highlighted: true },
    { text: "Products", icon: <img src={grid}/> },
    { text: "Favorites", icon: <img src={favourite}/> },
    { text: "Inbox ", icon: <img src={inbox}/> },
    { text: "Order Lists", icon: <img src={orderlist}/> },
    { text: "Product Stock", icon: <img src={product}/> },
    { text: "Pricing", icon: <img src={pricing}/> },
    { text: "Calender", icon: <img src={calender}/> },
    { text: "To-Do", icon: <img src={todo}/> },
    { text: "Contact", icon: <img src={contact}/> },
    { text: "Invoice", icon: <img src={invoice}/> },
    { text: "UI Elements", icon: <img src={ui}/> },
    { text: "Team", icon: <img src={team}/> },
    { text: "Table", icon: <img src={table}/> },
    { text: "Settings", icon: <img src={setting }/> },
    { text: "Logout", icon: <img src={logout}/> },
  ];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{backgroundColor:"ffffff", pb: "13px" }}
      >
        <Box  sx={{ height: "70px", marginTop:"30px",width:"10%" }} />
    <div
          style={{
            fontSize: "20px",
            fontWeight: "800",
            lineHeight: "20px",
            display: "flex",
            color:"#4880ff"
          }}
        >
          Dash
          <span
          style={{
            fontSize: "20px",
            fontWeight: "800",
            color:"#202224"
          }}
        >Stack</span>
        </div>
      </Toolbar>
      <List
  sx={{
    mt: "-19px",
    pb: "13px",
    px: "20px",
    height: "90vh",
    // borderRight: "2px solid gray",
  }}
>
  {navItems.map(({ text, icon, highlighted }) => {
    if (text === "Product Stock" || text === "Table") {
      return (
        <>
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
               
                ...(highlighted && { bgcolor: "#4880ff", borderRadius: 1 }),
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>{icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontWeight:500,
                      fontSize: "14px",
                      color:"#202224",
                      ...(highlighted && { fontWeight: 100, color: "white" }),
                    }}
                  >
                    {text}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ margin: "16px 0", width: "calc(100% + 36px)", marginLeft: "-16px",}} /> {/* Divider under "Product Stock" */}
        </>
      );
    }
    if (text === "Pricing" ) {
      return (
        <React.Fragment key={text}>
          {/* "Pages" heading */}
          <Typography
            sx={{
              fontSize: "12px", 
              fontWeight: "bold",
              color: "gray",
              ml: "16px", 
              textAlign:"left",
              display:"block",
              mt: "10px",
              mb: "15px"
            }}
          >
            PAGES
          </Typography>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                ...(highlighted && { bgcolor: "#4880ff", borderRadius: 1 }),
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>{icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontSize: "14px",
                      ...(highlighted && { fontWeight: 100, color: "white" }),
                    }}
                  >
                    {text}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </React.Fragment>
      );
    }
      
    return (
      <>
      <ListItem key={text} disablePadding>
        <ListItemButton
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0px",
            fontWeight:900,
                fontSize: "14px",
                color:"#202224",
                marginBottom:"7px",
            ...(highlighted && { bgcolor: "#4880ff", borderRadius: 1 }),
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>{icon}</ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: "14px",
                  ...(highlighted && { fontWeight: 100, color: "white" }),
                }}
              >
                {text}
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
      </>
    );
  })}
</List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "white",
        }}
      >
        <Toolbar sx={{display:"flex",justifyContent:"space-around"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr:{xs:8, md:2},ml:{xs:3, md:2}, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "gray", fontWeight: "600", ml:{xs:"0px", xl:"90px"} , display:{xs:"none", lg:"block"},
            fontSize: { lg: 20, xl: 30 }, 
            }}
          >
            Overview
          </Typography>
          <Box sx={{display:{xs:"none", md:"flex", },ml:{xl:"120px"}, gap:"20px" 
            }}>
          <Box sx={{bgcolor:"white", display:"flex", flexShrink:1, justifyContent:"center",alignItems:"center", padding:"4px 10px", gap:"6px", borderRadius:"4px"}}>
            <CalendarMonthIcon sx={{ fontSize: 30, color: "black", fill:"gray", width:{md:"20px",lg:"26px"} }} />
            <Typography variant="H4" sx={{color:"gray", fontSize:{md:"1vw"}, whiteSpace:"nowrap"}}>30 May</Typography>
          </Box>
          <Badge badgeContent={17} color="error" sx={{bgcolor:"white",padding:"7px 10px", borderRadius:"4px"}}>
                <NotificationsIcon sx={{fill:"gray",width:{md:"20px",lg:"26px"} }}/>
              </Badge>
              <Box sx={{bgcolor:"white", display:"flex", justifyContent:"center",alignItems:"center", padding:"4px 10px", gap:"6px", borderRadius:"4px"}}>
            <ChatBubbleIcon sx={{ fontSize: 30, color: "black", fill:"gray" }} />
          </Box>
          </Box>
          <Box sx={{ flexGrow: 0, mr:{xs:"40px"}, ml:{xs:"90px", sm:"12px",md:"30px", lg:"90px"},bgcolor:"white",borderRadius:"50px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={logo}
               />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography sx={{ marginBottom: 2 }}>
          <Box display="grid" gap="20px" paddingLeft="16px" paddingRight="16px" sx={{display: "grid",
    gridTemplateColumns: {
      xs: "1fr",    
      md: " 1fr 1fr" 
    },}}>
  
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
