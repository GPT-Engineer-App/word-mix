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
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Input
          placeholder="Enter a word"
          value={inputWord}
          onChange={handleInputChange}
          size="lg"
        />
        <Button colorScheme="blue" onClick={fetchRandomWord} size="lg">Generate Random Word</Button>
        <Box p={4} mt={4} width="100%" bg="gray.100" borderRadius="md">
          <Text fontSize="2xl" textAlign="center">{randomWord}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;