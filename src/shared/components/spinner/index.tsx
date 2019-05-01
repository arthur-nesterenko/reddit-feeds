import React from 'react';
import { Box, Typography } from '@smooth-ui/core-sc';

interface ISpinner {
  children: () => any;
  loading: boolean;
}

const Spinner = ({ loading, children }: ISpinner) => {
  if (loading) {
    return (
      <Box
        minHeight="100vh"
        width="100%"
        display="flex"
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
      >
        <Typography textAlign="center" variant="display-4">
          Loading
        </Typography>
      </Box>
    );
  } else {
    return children();
  }
};

export default Spinner;
