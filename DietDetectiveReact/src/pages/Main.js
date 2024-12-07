import '../css/App.css';
import { Box, Heading, List, ListItem, Flex, Text, Image} from '@chakra-ui/react';
import React from 'react';
import Login from './Login';

export default function Main() {
  return (
    <div className="App" >
      <Flex ml="5%" mt="6">
        <Box display="inline-block" position="relative" height="80vh" width="30vw" ml ={{ base: '6', md: '0' }} mt="6">
          <Flex alignItems="center" justifyContent="center">
            <Image width="40vh" height="40vh"
                  src="img/logo_bg.png"
                  alt="Logo"
                  justifyContent="center"
                  alignItems="center"/>
            <List position="absolute" textAlign="-webkit-center">
              <ListItem color={"white"}>
                <Heading as="h1" size="lg">
                  Z nami zjecie zdrowiej!
                </Heading>
              </ListItem>
              <ListItem color={"white"}>
                <Text display={{base: "none", md: "block"}}  fontSize={{ base: "1vh", md: "1.5vh", lg: "1.5vh", xl: "2vh" }} maxW={{ lg: "80%", xl: "80%" }}>
                  DietDetective to innowacyjna aplikacja dietetyczna, będzie Twoim niezastąpionym narzędziem w drodze do
                  osiągnięcia sukcesu. Dzięki jej funkcjom będziesz śledzić swoje spożycie kalorii oraz składników
                  odżywczych, otrzymywać spersonalizowane porady dietetyczne i przepisy
                </Text>
              </ListItem>
            </List>
          </Flex>
        </Box>

        <Box display="inline-block" mr="15%" ml="auto">
            <Login></Login>
        </Box>
      </Flex>

    </div>
);
}
