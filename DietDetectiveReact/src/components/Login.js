import React, {useContext, useEffect, useState} from 'react';
import {Button, Flex, HStack, Spacer, Text} from '@chakra-ui/react';
import {FaUser} from 'react-icons/fa';
import AuthContext from "../context/AuthProvider";
import {ACCESS_TOKEN} from "../constans";
import {Link, useNavigate} from "react-router-dom";
import Stripe from "./Stripe";
import {getCurrentUser, handleSetTargetWeight} from "../util/APIUtils";

export default function Login() {
    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);

    const logout = () => {
        setAuth({
            isAuthenticated: false,
            currentUser: null,
            isInterviewCompleted: false
        });
        localStorage.removeItem(ACCESS_TOKEN);
        navigate('/login');
    }

    return (

        (auth.isAuthenticated) ? (
                <Flex as="nav" alignItems="center" color={"white"}>
                    <Stripe/>
                    <Spacer/>
                    <HStack spacing="20px">
                        <Link to="/account">
                            <Flex align="center">
                                <FaUser size={20} />
                                <Text ml={2}>Witaj, {auth.currentUser.firstName}!</Text>
                            </Flex>
                        </Link>
                        <Button colorScheme="blue" onClick={logout}>Wyloguj</Button>
                    </HStack>
                </Flex>
            )
            : (
                <Flex as="nav" alignItems="center" color={"white"}>
                    <Spacer/>
                    <HStack spacing="20px">
                        <Link to="/login">
                            <Button colorScheme="blue">Zaloguj</Button>
                        </Link>
                    </HStack>
                </Flex>
            )

    )
}
 