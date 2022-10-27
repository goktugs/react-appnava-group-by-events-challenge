import React from 'react';
import { Box, Accordion } from '@chakra-ui/react';

import SingleEvent from './SingleEvent';

const EventsList = () => {
  return (
    <Box bg={'blue'} height="400px" overflowY={'scroll'}>
      <Accordion allowMultiple>
        <SingleEvent />
      </Accordion>
    </Box>
  );
};

export default EventsList;
