import React from 'react';
import { Box, Button, Typography } from '@smooth-ui/core-sc';
import { AsyncButton } from 'shared/components';

interface ILimitNavigation {
  limits: number[];
  onPaginate: (...args: any[]) => any;
  currentLimit: number;
}
const LimitNavigation = ({ limits, currentLimit, onPaginate }: ILimitNavigation) => {
  return (
    <Box p={10} display="flex" justifyContent="center">
      <Typography display="block" m={2} variant={'h6'}>
        Limits
      </Typography>
      {limits.map(limit => (
        <AsyncButton
          key={limit}
          onClick={onPaginate}
          disable={limit === currentLimit}
          render={btnProps => (
            <Button m={1} key={limit} size="sm" variant={'light'} data-limit={limit} {...btnProps}>
              {limit}
            </Button>
          )}
        />
      ))}
    </Box>
  );
};

export default LimitNavigation;
