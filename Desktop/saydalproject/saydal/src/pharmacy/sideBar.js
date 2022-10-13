
import Navbar from "../components/Navbar/navbar";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from "react-router-dom";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';
import saudi from "../assets/Images/saudi.png";

import "./sideBar.css";




const drawerWidth = 240;



const SideBar = (props) => {

    const [activeClasse, setActiveClass] = useState()

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='header'>
            <div className="no"><Navbar /></div>
            <Toolbar />
            <List style={{ direction: "rtl" }} >


                <ListItem disablePadding >
                    <NavLink className="nav-link" style={{ textDecoration: "none" }} to="/products">
                        <ListItemButton>


                            <MenuIcon />

                            <div style={{ width: "10px" }}></div>

                            <ListItemText primary="منتجات" style={{ textAlign: "right", paddingRight: "0" }} />


                        </ListItemButton>
                    </NavLink>
                </ListItem>

                <ListItem disablePadding>
                    <NavLink className="nav-link" style={{ textDecoration: "none" }} to="/selAndPur">
                        <ListItemButton>



                            <MenuIcon />
                            <div style={{ width: "10px" }}></div>

                            <ListItemText style={{ textAlign: "right", paddingRight: "0" }} primary="مبيعات ومشتريات" />

                        </ListItemButton>
                    </NavLink>
                </ListItem>

                <ListItem disablePadding>
                    <NavLink className="nav-link" style={{ textDecoration: "none" }} to="/reports">
                        <ListItemButton>



                            <MenuIcon />
                            <div style={{ width: "10px" }}></div>


                            <ListItemText style={{ textAlign: "right", paddingRight: "0" }} primary="فواتير وتقارير" />

                        </ListItemButton>
                    </NavLink>
                </ListItem>



                <ListItem disablePadding>
                    <NavLink className="nav-link" style={{ textDecoration: "none" }} to="/services">
                        <ListItemButton>



                            <MenuIcon />
                            <div style={{ width: "10px" }}></div>


                            <ListItemText style={{ textAlign: "right", paddingRight: "0" }} primary="خدمات البرنامج" />

                        </ListItemButton>
                    </NavLink>
                </ListItem>

                <ListItem disablePadding>
                    <NavLink className="nav-link" style={{ textDecoration: "none" }} to="/settings">
                        <ListItemButton>



                            <MenuIcon />
                            <div style={{ width: "10px" }}></div>

                            <ListItemText primary="الاعدادات" style={{ textAlign: "right", paddingRight: "2px" }} />

                        </ListItemButton>
                    </NavLink>
                </ListItem>



                <ListItem disablePadding>
                    <NavLink className="nav-link" style={{ textDecoration: "none" }} to="/logOut">
                        <ListItemButton>



                            <MenuIcon />
                            <div style={{ width: "10px" }}></div>


                            <ListItemText primary="تسجيل الخروج" style={{ textAlign: "right", paddingRight: "0" }} />

                        </ListItemButton>
                    </NavLink>
                </ListItem>






            </List>


        </div >
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div >
            <Navbar />

            <Box style={{ backgroundColor: "white" }} sx={{ display: 'flex' }}>
                <CssBaseline />

                <Toolbar>
                    <IconButton

                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, top: "10px" }}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>

                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >

                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        anchor="right"
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        anchor="right"
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />

                </Box>
                <Button style={{ width: "100px", borderColor: "grey", borderWidth: "1px", borderStyle: "solid", height: "25px", float: "left", position: "relative", top: "-10px", marginLeft: "10px", borderColor: "grey", borderRadius: "5%", backgroundColor: "white", cursor: "pointer", borderRadius: "5%" }}><span style={{ marginLeft: "40%", color: "blue", position: "absolute", top: "6%", width: "10px" }}> Ar</span> < KeyboardArrowDown style={{ position: "absolute", float: "right", color: "blue", top: "17%", right: "-5%", height: "17px", fontSize: "medium", marginRight: "3px" }} /> <img style={{ width: "20px", height: "20px", float: "left", marginLeft: "0%", marginRight: "60%", top: "-10px" }} src={saudi} /> </Button>
            </Box>

        </div>
    )
}

export default SideBar;
