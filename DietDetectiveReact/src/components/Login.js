import React, {useContext, useState} from 'react';
import {
    Button,
    Flex,
    HStack,
    Image,
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
    INTERVIEW,
    LOGIN,
    MAIN_PAGE,
    MEALS,
    MEALS_IMG,
    MONITORING,
    MONITORING_IMG,
    PROFILE,
    PROFILE_IMG,
    RECIPES,
    RECIPES_IMG,
    REGISTER,
    WATER,
    WATER_IMG
} from "../constans/HelpConstants";

export default function Login() {
    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [helpPage, setHelpPage] = useState(0)
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

    const getHelpText = (n) => {
        switch (location.pathname) {
            case "/":
                return MAIN_PAGE[n];
            case "/old_main":
                return MAIN_PAGE[n];    
            case "/monitor":
                return MONITORING[n];
            case "/water":
                return WATER[n];
            case "/meal":
                return MEALS[n];
            case "/recipes":
                return RECIPES[n];
            case "/chat":
                return ASSISTANT[n];
            case "/account":
                return PROFILE[n];
            case "/login":
                return LOGIN[n];
            case "/register":
                return REGISTER[n];
            case "/interview":
                return INTERVIEW[n];    
            default:
                return "Welcome! Use the navigation bar to explore.";
        }
    }
    const getHelpImage = (n) => {
        switch (location.pathname) { 
            case "/monitor":
                return MONITORING_IMG[n];
            case "/water":
                return WATER_IMG[n];
            case "/meal":
                return MEALS_IMG[n];
            case "/recipes":
                return RECIPES_IMG[n];
            case "/account":
                return PROFILE_IMG[n];   
            default:
                return "";
        }
    }
    const getHelpTextArrLength = () => {
        switch (location.pathname) {
            case "/":
                return MAIN_PAGE.length;
            case "/old_main":
                return MAIN_PAGE.length;    
            case "/monitor":
                return MONITORING.length;
            case "/water":
                return WATER.length;
            case "/meal":
                return MEALS.length;
            case "/recipes":
                return RECIPES.length;
            case "/chat":
                return ASSISTANT.length;
            case "/account":
                return PROFILE.length;
            case "/login":
                return LOGIN.length;
            case "/register":
                return REGISTER.length;
            case "/interview":
                return INTERVIEW.length;    
            default:
                return 2;
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
            <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false); setHelpPage(0)}} isCentered>
                <ModalOverlay />
                <ModalContent maxW = "45vw">
                    <ModalHeader>Pomoc</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight="bold" whiteSpace="pre-wrap">{getHelpText(helpPage)}</Text>
                        <Text whiteSpace="pre-wrap">{getHelpText(helpPage+1)}</Text>
                        <Image src={getHelpImage(helpPage/2)}></Image>
                    </ModalBody>
                    <ModalFooter>
                    {helpPage != 0 && (<Button colorScheme="gray" onClick={() => setHelpPage(helpPage-2)}>
                            Wstecz
                        </Button>
                    )}
                    {helpPage < getHelpTextArrLength()-2 && (<Button colorScheme="gray" onClick={() => setHelpPage(helpPage+2)}>
                            Dalej
                        </Button>
                    )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );

}
 