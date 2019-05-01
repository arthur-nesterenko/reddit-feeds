import React, { useState, useCallback, Fragment } from 'react';
import { Box } from '@smooth-ui/core-sc';
import Api, { IFeeds, IFeedsData } from 'services/api';
import { Spinner } from 'shared/components';
import { useFetch } from 'shared/hooks';
import FeedList from './components/feed-list';
import Pagination from './components/pagination';
import LimitNavigation from './components/limit-navigation';

/**
 *
 * @param params
 */
const fetchFeeds = async (params = {}): Promise<IFeedsData> => {
  try {
    const { data } = await Api.fetchFeeds<IFeeds>('/r/angular.json', { limit: 10, ...params });
    return data;
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @constructor
 */
const HomeScreen = () => {
  const [limit, setLimit] = useState(10);
  const { data, loading, fetch } = useFetch<IFeedsData>(fetchFeeds, {
    after: null,
    before: null,
    children: [],
    dist: 0,
  });

  const paginate = useCallback(
    (e: any) => {
      const limit = Number(e.currentTarget.dataset.limit);
      fetch({ limit }).then(() => setLimit(limit));
    },
    [fetch]
  );

  const onNextClick = useCallback(() => fetch({ after: data.after, count: limit + data.dist }), [
    data.after,
    data.dist,
    fetch,
    limit,
  ]);

  const onPrevClick = useCallback(() => fetch({ before: data.before, count: data.dist + limit }), [
    data.before,
    data.dist,
    fetch,
    limit,
  ]);

  return (
    <Box p={20} display="flex" flexDirection="column">
      <LimitNavigation limits={[5, 10, 25]} onPaginate={paginate} currentLimit={limit} />
      <Spinner loading={loading}>
        {() => (
          <Fragment>
            <FeedList items={data.children} />
            <Pagination
              disableNext={data.after === null}
              disablePrev={data.before === null}
              onNextClick={onNextClick}
              onPrevClick={onPrevClick}
            />
          </Fragment>
        )}
      </Spinner>
    </Box>
  );
};

export default HomeScreen;
