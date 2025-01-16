import '../css/App.css';
import {Box, Heading, List, ListItem, Flex, Text, Image} from '@chakra-ui/react';
import React from 'react';
import Login from './Login';

export default function Main() {
    return (
        <div className="App">
            <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                height="80vh"
                mt="0" // Reduce the space above
            >
                <Box
                    display="inline-block"
                    textAlign="center"
                    marginRight="20px"
                    width={{base: "60%", md: "40%"}}
                >
                    <Heading as="h1" size="lg" color="white" mb="10px" maxW="80%">
                        Z nami zjecie zdrowiej!
                    </Heading>
                    <Text
                        display={{base: "none", md: "block"}}
                        fontSize={{base: "1vh", md: "1.5vh", lg: "1.5vh", xl: "2vh"}}
                        maxW="80%"
                        color="white"
                    >
                        DietDetective to innowacyjna aplikacja dietetyczna, będzie Twoim
                        niezastąpionym narzędziem w drodze do osiągnięcia sukcesu. Dzięki jej
                        funkcjom będziesz śledzić swoje spożycie kalorii oraz składników
                        odżywczych, otrzymywać spersonalizowane porady dietetyczne i przepisy.
                    </Text>
                </Box>
                <Box display="inline-block">
                    <Login/>
                </Box>
            </Flex>
        </div>

    );
}
