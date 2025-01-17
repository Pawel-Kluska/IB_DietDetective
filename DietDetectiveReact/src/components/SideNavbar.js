import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {GiHeartBeats, GiHotMeal} from 'react-icons/gi';
import {FaSignInAlt, FaUser, FaUserPlus, FaUtensils, FaHome} from 'react-icons/fa';
import {Box, Flex, Heading, Image, List, ListItem} from '@chakra-ui/react';
import AuthContext from "../context/AuthProvider";
import {FaMessage} from "react-icons/fa6";
import {IoWater} from "react-icons/io5";


export default function SideNavbar() {
    const iconBox = {
        marginRight: "8px",
        bg: "#30344D",
        borderRadius: "25%",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    const lineStyle = {
        borderTop: "1px solid rgba(255, 255, 255, 1)",
        marginTop: "20px",
        marginBottom: "20px",
        opacity: "0.5"
    };
    const {auth} = useContext(AuthContext);

    return (
        <div className="App">
            <List color="white">
                <NavLink to="/monitor">
                    <Flex align="center">
                        <Image src="img/logo.png" alt="logo" style={{width: "45px", height: "45px"}}/>
                        <Heading size="md" as="h1">
                            DietDetective
                        </Heading>
                    </Flex>
                </NavLink>
                <hr style={lineStyle}/>
                {auth.isInterviewCompleted && auth.isAuthenticated ? (
                    <>
                        <ListItem marginBottom="20px">
                            <NavLink to="/monitor"
                                     style={({ isActive }) => ({
                                         color: isActive ? "#3182ce" : "white", // Highlight active link
                                         fontWeight: isActive ? "bold" : "normal"
                                     })}>
                                <Flex align="center">
                                    <Box sx={iconBox}>
                                        <GiHeartBeats size={20}/>
                                    </Box>
                                    Monitorowanie
                                </Flex>
                            </NavLink>
                        </ListItem>
                        <ListItem marginBottom="20px">
                            <NavLink to="/water"
                                     style={({ isActive }) => ({
                                         color: isActive ? "#3182ce" : "white", // Highlight active link
                                         fontWeight: isActive ? "bold" : "normal"
                                     })}>
                                <Flex align="center">
                                    <Box sx={iconBox}>
                                        <IoWater size={20}/>
                                    </Box>
                                    Nawodnienie
                                </Flex>
                            </NavLink>
                        </ListItem>
                        <ListItem marginBottom="20px">
                            <NavLink to="/meal"
                                     style={({ isActive }) => ({
                                         color: isActive ? "#3182ce" : "white", // Highlight active link
                                         fontWeight: isActive ? "bold" : "normal"
                                     })}>
                                <Flex align="center">
                                    <Box sx={iconBox}>
                                        <GiHotMeal size={20}/>
                                    </Box>
                                    Posiłki
                                </Flex>
                            </NavLink>
                        </ListItem>
                        <ListItem marginBottom="20px">
                            <NavLink to="/recipes"
                                     style={({ isActive }) => ({
                                         color: isActive ? "#3182ce" : "white", // Highlight active link
                                         fontWeight: isActive ? "bold" : "normal"
                                     })}>
                                <Flex align="center">
                                    <Box sx={iconBox}>
                                        <FaUtensils size={20}/>
                                    </Box>
                                    Przepisy
                                </Flex>
                            </NavLink>
                        </ListItem>
                        {/* <ListItem marginBottom="20px">
                            <NavLink to="/chat"
                                     style={({ isActive }) => ({
                                         color: isActive ? "#3182ce" : "white", // Highlight active link
                                         fontWeight: isActive ? "bold" : "normal"
                                     })}>
                                <Flex align="center">
                                    <Box sx={iconBox}>
                                        <FaMessage size={20}/>
                                    </Box>
                                    Asystent
                                </Flex>
                            </NavLink>
                        </ListItem> */}
                        <ListItem marginBottom="20px">
                            <NavLink to="/account"
                                     style={({ isActive }) => ({
                                         color: isActive ? "#3182ce" : "white", // Highlight active link
                                         fontWeight: isActive ? "bold" : "normal"
                                     })}>
                                <Flex align="center">
                                    <Box sx={iconBox}>
                                        <FaUser size={20}/>
                                    </Box>
                                    Profil
                                </Flex>
                            </NavLink>
                        </ListItem>

                    </>
                ) : (
                    <>
                        <ListItem marginBottom="20px">
                            <NavLink to="/"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#3182ce" : "white", // Highlight active link
                                        fontWeight: isActive ? "bold" : "normal"
                                    })}>
                                <Flex align="center">
                                    <Box sx={iconBox}>
                                        <FaHome size={20}/>
                                    </Box>
                                    Strona Główna
                                </Flex>
                            </NavLink>
                        </ListItem>
                        {/* <ListItem marginBottom="20px">
                            <NavLink to="/login"
                                     style={({ isActive }) => ({
                                         color: isActive ? "#3182ce" : "white", // Highlight active link
                                         fontWeight: isActive ? "bold" : "normal"
                                     })}>
                                <Flex align="center">
                                    <Box sx={iconBox}>
                                        <FaSignInAlt size={20}/>
                                    </Box>
                                    Logowanie
                                </Flex>
                            </NavLink>
                        </ListItem> */}
                        <ListItem marginBottom="20px">
                            <NavLink to="/register"
                                     style={({ isActive }) => ({
                                         color: isActive ? "#3182ce" : "white", // Highlight active link
                                         fontWeight: isActive ? "bold" : "normal"
                                     })}>
                                <Flex align="center">
                                    <Box sx={iconBox}>
                                        <FaUserPlus size={20}/>
                                    </Box>
                                    Rejestracja
                                </Flex>
                            </NavLink>

                        </ListItem>
                    </>
                )}
            </List>
        </div>
    );

}
