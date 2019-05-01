import React, { useCallback, Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Box, Typography } from '@smooth-ui/core-sc';
import Api, { ISingleFeed } from 'services/api';
import { useFetch } from 'shared/hooks';
import Feed from './components/feed';
import Comments from './components/comments';
import { Spinner } from 'shared/components';

interface IFeedParams {
  subreddit: string;
  id: string;
  name: string;
}

const FeedScreen = ({ match: { url } }: RouteComponentProps<IFeedParams>) => {
  const fetch = useCallback(async () => {
    const path = url.replace(/(\/#|\/|#)$/, '.json');
    const [feed, comments] = await Api.fetchFeeds<ISingleFeed>(path);
    return { feed: feed.data.children, comments: comments.data.children };
  }, [url]);

  const {
    data: { feed, comments },
    loading,
  } = useFetch(fetch, { feed: [], comments: [] });

  return (
    <Box p={2}>
      <Spinner loading={loading}>
        {() => (
          <Fragment>
            <Feed items={feed} />
            <hr />
            {comments && <Typography variant="h5">Comments</Typography>}
            <Comments comments={comments} />
          </Fragment>
        )}
      </Spinner>
    </Box>
  );
};

export default FeedScreen;
