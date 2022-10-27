import React from 'react';
import { Text, Box, Input, Flex } from '@chakra-ui/react';

const InputPart = () => {
  return (
    <Flex bg={'#b6f4be'} alignItems={'center'} justifyContent="space-evenly">
      <Box
        width="35%"
        bg={'#b6f4be'}
        py="3"
        px="1"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-around'}
      >
        <Box>
          <Text color={'purple'} fontWeight="bold">
            SELECT
          </Text>
        </Box>
        <Box>
          <Text color={'purple'} fontWeight="bold">
            EVENTS
          </Text>
        </Box>
      </Box>
      <Box width={'65%'}>
        <Input
          placeholder="Search event..."
          textColor={'purple'}
          _placeholder={{ color: 'purple' }}
        />
      </Box>
    </Flex>
  );
};

export default InputPart;
