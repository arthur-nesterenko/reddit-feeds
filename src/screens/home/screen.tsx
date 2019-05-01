import React, { useState, useCallback, Fragment } from 'react';
import { Box } from '@smooth-ui/core-sc';
import Api, { IFeeds, IFeedsData } from 'services/api';
import { Spinner } from 'shared/components';
import { useFetch } from 'shared/hooks';
import FeedList from './components/feed-list';
import Pagination from './components/pagination';
import LimitNavigation from './components/limit-navigation';
import CategoryNavigation from './components/category-navigation';

const fetchFeeds = async (category: string = 'angular', params = {}): Promise<IFeedsData> => {
  try {
    const { data } = await Api.fetchFeeds<IFeeds>(`/r/${category}.json`, { limit: 10, ...params });
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
  const [category, setCategory] = useState('angular');
  const { data, loading, fetch } = useFetch<IFeedsData>(fetchFeeds, {
    after: null,
    before: null,
    children: [],
    dist: 0,
  });

  const paginate = useCallback(
    (e: any) => {
      const limit = Number(e.currentTarget.dataset.limit);
      fetch(category, { limit }).then(() => setLimit(limit));
    },
    [category, fetch]
  );

  const onNextClick = useCallback(
    () => fetch(category, { limit, after: data.after, count: limit + data.dist }),
    [category, data.after, data.dist, fetch, limit]
  );

  const onPrevClick = useCallback(
    () => fetch(category, { limit, before: data.before, count: data.dist + limit }),
    [category, data.before, data.dist, fetch, limit]
  );

  const onChangeCategory = useCallback(
    (category: string) => fetch(category, { limit }).then(() => setCategory(category)),
    [fetch, limit]
  );

  return (
    <Box p={20} display="flex" flexDirection="column">
      <LimitNavigation limits={[5, 10, 25]} onPaginate={paginate} currentLimit={limit} />
      <CategoryNavigation
        categories={['angular', 'reactjs', 'php', 'python']}
        onChange={onChangeCategory}
        currentCategory={category}
      />
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
