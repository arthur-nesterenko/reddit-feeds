import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

export interface IUseFetch<T> {
  loading: boolean;
  error?: undefined | Error;
  data: T;
  fetch: (...values: any[]) => Promise<any>;
}
/**
 *
 * @param fn
 * @param initialValue
 */
const useFetch = <T>(fn: (...params: any[]) => Promise<T>, initialValue: T): IUseFetch<T> => {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | undefined>(undefined);
  const isMount = useRef(true);

  const fetch = useCallback(
    async (...params: any[]) => {
      try {
        setLoading(true);
        const data = await fn.apply(null, params);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [fn]
  );

  useEffect(() => {
    if (isMount.current) {
      fetch();
    }
  }, [fetch]);

  useEffect(() => {
    isMount.current = true;
    return () => {
      isMount.current = false;
    };
  }, [loading]);

  return useMemo<IUseFetch<T>>(() => ({ data, error, fetch, loading }), [
    data,
    error,
    fetch,
    loading,
  ]);
};

export default useFetch;
