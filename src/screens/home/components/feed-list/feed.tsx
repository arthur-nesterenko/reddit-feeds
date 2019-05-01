import React, { useCallback } from 'react';
import { IFeedsChildrenData } from 'services/api';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Box, Typography } from '@smooth-ui/core-sc';
/**
 *
 */
type IFeed = RouteComponentProps & IFeedsChildrenData;
/**
 *
 * @param created
 * @param permalink
 * @param author
 * @param score
 * @param title
 * @param thumbnail
 * @param num_comments
 * @param history
 * @constructor
 */
const Feed = ({
  created,
  permalink,
  author,
  score,
  title,
  thumbnail,
  num_comments,
  history,
}: IFeed) => {
  const moveTo = useCallback(() => {
    history.push(permalink);
  }, [history, permalink]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      as="article"
      background="#cecece26"
      p={2}
      m={1}
      onClick={moveTo}
    >
      <Typography variant="h4">
        <Link style={{ textDecoration: 'none' }} to={permalink}>
          {title}
        </Link>
      </Typography>
      <Box display="flex" justifyContent="center">
        {thumbnail !== 'self' && <img src={thumbnail} alt={title} />}
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography alignContent="right" textAlign="right" as="h5" m={0}>
          Posted by {author}
        </Typography>
        <Typography as="small">Score {score}</Typography>
        <Typography as="small">{num_comments} comments</Typography>
        <Typography as="small">created {new Date(created * 1000).toLocaleDateString()}</Typography>
      </Box>
    </Box>
  );
};

export default withRouter(Feed);
