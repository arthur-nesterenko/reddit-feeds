import React from 'react';
import { Box, Button, Typography } from '@smooth-ui/core-sc';
import { AsyncButton } from 'shared/components';

interface ICategoryNavigation {
  categories: string[];
  onChange: (category: string) => any;
  currentCategory: string;
}
const CategoryNavigation = ({ categories, currentCategory, onChange }: ICategoryNavigation) => {
  return (
    <Box p={10} display="flex" justifyContent="center">
      <Typography display="block" m={2} variant={'h6'}>
        Categories
      </Typography>
      {categories.map(category => (
        <AsyncButton
          key={category}
          onClick={() => onChange(category)}
          disable={category === currentCategory}
          render={btnProps => (
            <Button m={1} key={category} size="sm" variant="secondary" {...btnProps}>
              {category}
            </Button>
          )}
        />
      ))}
    </Box>
  );
};

export default CategoryNavigation;
