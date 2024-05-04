import { useState } from 'react';
import { Container, VStack, Input, Button, Text, Box } from '@chakra-ui/react';

const Index = () => {
  const [inputWord, setInputWord] = useState('');
  const [randomWord, setRandomWord] = useState('');
  const [dictionary, setDictionary] = useState(['example', 'word', 'list', 'random', 'generate']);

  const handleInputChange = (event) => {
    setInputWord(event.target.value);
  };

  const fetchRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    setRandomWord(dictionary[randomIndex]);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.50" p={5}>
      <VStack spacing={4} width="100%">
        <Input
          placeholder="Enter a word"
          value={inputWord}
          onChange={handleInputChange}
          size="lg"
          focusBorderColor="brand.700"
          borderColor="brand.500"
          _hover={{ borderColor: "brand.600" }}
        />
        <Button colorScheme="blue" onClick={fetchRandomWord} size="lg" borderRadius="full" boxShadow="md">Generate Random Word</Button>
        <Box p={4} mt={4} width="100%" bg="blue.50" borderRadius="lg" border="1px" borderColor="blue.200">
          <Text fontSize="2xl" textAlign="center" fontWeight="bold" color="brand.700">{randomWord}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;