import React from 'react';
import { Button, Box } from '@smooth-ui/core-sc';
import { AsyncButton } from 'shared/components';

interface IPagination {
  onPrevClick: () => any;
  disablePrev: boolean;
  disableNext: boolean;
  onNextClick: () => any;
}

const Pagination = ({ disableNext, disablePrev, onNextClick, onPrevClick }: IPagination) => {
  return (
    <Box p={10} display="flex" justifyContent="space-between">
      <AsyncButton
        disable={disablePrev}
        onClick={onPrevClick}
        render={btnProps => <Button {...btnProps}>Previous</Button>}
      />

      <AsyncButton
        disable={disableNext}
        onClick={onNextClick}
        render={btnProps => <Button {...btnProps}>Next</Button>}
      />
    </Box>
  );
};

export default Pagination;
