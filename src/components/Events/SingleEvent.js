import React from 'react';
import MainEvents from './MainEvents.json';
import SubEvents from './SubEvents.json';
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react';

const SingleEvent = () => {
  console.log(MainEvents.length);

  const events = MainEvents.map((elem, i) => (
    <AccordionItem>
      <Box display={'flex'} alignItems="center">
        <Button colorScheme={'teal'} size="sm" width={'fit-content'} ml="35px">
          Add
        </Button>
        <Box width="100%">
          <AccordionButton pl={'73px'}>
            <Box width={'100%'} textAlign="left">
              {MainEvents[i]}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Box>
      </Box>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  ));

  return <>{events}</>;
};

export default SingleEvent;
