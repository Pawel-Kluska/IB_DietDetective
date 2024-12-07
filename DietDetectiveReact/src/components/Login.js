import React, {useContext, useState} from 'react';
import {
    Button,
    Flex,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spacer,
    Text
} from '@chakra-ui/react';
import {FaQuestionCircle, FaUser} from 'react-icons/fa';
import AuthContext from "../context/AuthProvider";
import {ACCESS_TOKEN} from "../constans";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Stripe from "./Stripe";
import {
    ASSISTANT,
    LOGIN,
    MAIN_PAGE,
    MEALS,
    MONITORING,
    PROFILE,
    RECIPES,
    REGISTER,
    WATER
} from "../constans/HelpConstants";

export default function Login() {
    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    const logout = () => {
        setAuth({
            isAuthenticated: false,
            currentUser: null,
            isInterviewCompleted: false
        });
        localStorage.removeItem(ACCESS_TOKEN);
        navigate('/');
    }

    const getHelpText = () => {
        switch (location.pathname) {
            case "/":
                return MAIN_PAGE;
            case "/monitor":
                return MONITORING;
            case "/water":
                return WATER;
            case "/meal":
                return MEALS;
            case "/recipes":
                return RECIPES;
            case "/chat":
                return ASSISTANT;
            case "/account":
                return PROFILE;
            case "/login":
                return LOGIN;
            case "/register":
                return REGISTER;
            default:
                return "Welcome! Use the navigation bar to explore.";
        }
    }
    return (
        <Flex as="nav" alignItems="center" color="white">
            <Stripe />
            <Spacer />
            <HStack spacing="20px">
                <Button
                    leftIcon={<FaQuestionCircle />}
                    onClick={() => setIsModalOpen(true)}
                >
                    Pomoc
                </Button>
                {auth.isAuthenticated &&
                    <>
                        <Link to="/account">
                            <Flex align="center">
                                <FaUser size={20} />
                                <Text ml={2}>Witaj, {auth.currentUser.firstName}!</Text>
                            </Flex>
                        </Link>
                        <Button colorScheme="blue" onClick={logout}>
                            Wyloguj
                        </Button>
                    </>
                }
            </HStack>

            {/* Help Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Pomoc</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{getHelpText()}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                            Zamknij
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );

}
 