import React, { useEffect, useState } from 'react';
import {Box, Container, SimpleGrid, Text, Heading, IconButton, Flex, Button, useToast} from '@chakra-ui/react';
import {

  FaInfoCircle,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';
import {getMeal, getMeals, handleEaten} from '../util/APIUtils';
import {useNavigate} from "react-router-dom";

export default function Recipes() {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState([]);
  const [id] = useState(16);
  const toast = useToast();

  const FirstBox = {
    bgGradient: "linear(to-r, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))",
    width: "350px",
    height: "300px",
    color: "white",
    borderRadius: "lg",
    p: "20px",
    textAlign: "center"
  }
  const navigate = useNavigate();
  const handleDetailsClick = (id) => {
    console.log('Clicked:', id);
    navigate("/recipes/" + id);
  };
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(meals.length / itemsPerPage)) {
      setCurrentPage(newPage);
      setTotalPages(Math.ceil(meals.length / itemsPerPage));
    }
  };

  const fetchMeals = async () => {
    getMeals(id)
        .then((response) => {
          setMeals(response.data);
        })
        .catch((error) => {
          console.error('Błąd podczas pobierania danych użytkownika', error);
        });
  };

  const fetchMeal = async () => {
    getMeal(id)
        .then((response) => {
          setMeal(response.data);
        })
        .catch((error) => {
          console.error('Błąd podczas pobierania danych użytkownika', error);
        });
  };

  const setNewEaten = async (mealID, mealName) => {
    const mealUnit = 100;
    try {
      await handleEaten({mealId: parseInt(mealID), eatenWeight: mealUnit});
      toast({
        title: `Pomyślnie dodano ${mealName}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    } catch (error) {
      console.error('Error adding eaten meal', error);
    }
  };

  useEffect(() => {
    fetchMeals();
    fetchMeal();
  }, []);

  return (
      <div className="App">
        <Heading color="white">Na co masz ochotę?</Heading>
        <Container maxWidth={'3x1'} py="10px" >
          <SimpleGrid spacing={6} ml={{ base: '0', md: '5' }} minChildWidth="300px">
            {meals &&
                meals.slice(startIndex, endIndex).map((meal, index) => (
                    <Box key={meal.id} sx={FirstBox}>
                      <Flex direction="column" justifyContent="space-between" height="100%">
                        <Flex justifyContent="center" height="40%">
                          <img
                              src={meal.image}
                              alt={meal.name}
                              style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                borderRadius: '50%',
                              }}
                          />
                        </Flex>
                        <Flex direction="column" alignItems="center">
                          <Text fontSize="lg" fontWeight="bold">
                            {meal.name}
                          </Text>
                          <Text mb={3}>{meal.calories} kcal / 100g</Text>
                        </Flex>
                        <Flex direction="column" mt="auto">
                          <Button
                              leftIcon={<FaInfoCircle />}
                              onClick={() => handleDetailsClick(meal.id)}
                              size="sm"
                              colorScheme="blue"
                              width="90%" /* Adjusted to be narrower */
                              mx="auto" /* Centers the button */
                          >
                            Przygotowanie
                          </Button>
                          <Button
                              leftIcon={<FaInfoCircle />}
                              onClick={() => setNewEaten(meal.id, meal.name)}
                              size="sm"
                              colorScheme="green"
                              width="90%" /* Adjusted to be narrower */
                              mx="auto" /* Centers the button */
                              mt={3}
                          >
                            Dodaj do spożytych
                          </Button>
                        </Flex>

                      </Flex>
                    </Box>
                ))}
          </SimpleGrid>

        </Container>

        <Flex justifyContent="center" mt="2vh" mb="5vh" align="center" ml={{ base: '16', md: '0' }}>
          <IconButton
              aria-label="Previous Page"
              icon={<FaArrowLeft />}
              onClick={() => changePage(currentPage - 1)}
              size="sm"
              colorScheme="whiteAlpha"
              visibility={currentPage > 1 ? "visible" : "hidden"}
          />
          <Text color="white" mx="20px">
            {currentPage}/{totalPages}
          </Text>
          <IconButton
              aria-label="Next Page"
              icon={<FaArrowRight />}
              onClick={() => changePage(currentPage + 1)}
              size="sm"
              colorScheme="whiteAlpha"
              visibility={currentPage < totalPages ? "visible" : "hidden"}
          />
        </Flex>

      </div>
  );
}