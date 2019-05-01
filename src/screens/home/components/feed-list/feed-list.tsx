import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import Feed from './feed';
import { IFeedsChildren } from 'services/api';

interface IFeedList {
  items: IFeedsChildren[];
}
const FeedList = ({ items }: IFeedList) => {
  return (
    <Box p={1} display="flex" flexDirection="column">
      {items.map(({ data }) => (
        <Feed key={data.id} {...data} />
      ))}
    </Box>
  );
};

export default FeedList;
