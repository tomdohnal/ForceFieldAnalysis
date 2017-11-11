import React from 'react';

import { Box, Text } from './common';
import { HEADER_HEIGHT } from '../constants/styles';

const Header = () => (
  <Box height={HEADER_HEIGHT} textAlign="center">
    <Text fontSize="24px">Force Field Analysis Tool</Text>
  </Box>
);

export default Header;
