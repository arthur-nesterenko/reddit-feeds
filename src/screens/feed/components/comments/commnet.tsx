import React from 'react';
import { Box, Typography } from '@smooth-ui/core-sc';
import { ICommentsChildrenData } from 'services/api';
import CommentList from './comment-list';

const Comment = ({ author, body, replies, score, created }: ICommentsChildrenData) => {
  console.log('replies', replies);
  return (
    <Box borderLeft="1px solid #dae0e6" pl={2} m={2} as={'section'}>
      <Box display="flex" justifyContent="flex-start">
        <Typography mr={1} variant="h6">
          {author}
        </Typography>
        <Typography mr={1} as="small">
          {score} points
        </Typography>
        <Typography as="small"> {new Date(created * 1000).toLocaleDateString()}</Typography>
      </Box>
      <Typography mt={0} as="p">
        {body}
      </Typography>
      {replies && <CommentList comments={replies.data.children} />}
    </Box>
  );
};

export default Comment;
