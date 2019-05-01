import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import Comment from './commnet';
import { ICommentList } from './types';

const CommentList = ({ comments }: ICommentList) => {
  return (
    <Box>
      {comments.map(({ data }) => (
        <Comment key={data.id} {...data} />
      ))}
    </Box>
  );
};

export default CommentList;
