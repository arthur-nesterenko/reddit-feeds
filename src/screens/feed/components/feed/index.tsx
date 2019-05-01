import React, { Fragment } from 'react';
import { Box, Typography } from '@smooth-ui/core-sc';
import { IFeedsChildren } from 'services/api';

interface IFeed {
  items: IFeedsChildren[];
}

const Feed = ({ items }: IFeed) => {
  return (
    <Fragment>
      {items.map(child => (
        <Box key={child.data.id} background="#cecece26">
          <Box display="flex" justifyContent="space-between" mb={1} p={2}>
            <Typography alignContent="right" textAlign="right" as="h5" m={0}>
              Posted by {child.data.author}
            </Typography>
            <Typography as="small">Points {child.data.score}</Typography>
            <Typography as="small">
              created {new Date(child.data.created * 1000).toLocaleDateString()}
            </Typography>
          </Box>
          <Typography variant="h1">{child.data.title}</Typography>
          <Typography as={'p'}>{child.data.selftext}</Typography>
        </Box>
      ))}
    </Fragment>
  );
};

export default Feed;
