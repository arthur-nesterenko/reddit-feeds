import { useState, useEffect, useCallback, useMemo } from 'react';

interface IAsyncButton {
  render: (props: IAsyncButtonRenderProps) => any;
  disable: boolean;
  onClick: (...args: any[]) => Promise<any>;
}

interface IAsyncButtonRenderProps {
  disabled: boolean;
  onClick: (e: any) => void;
}

const AsyncButton = ({ disable, onClick, render }: IAsyncButton) => {
  const [loading, setLoading] = useState(disable);

  useEffect(() => {
    setLoading(disable);
  }, [disable]);

  const handleClick = useCallback(
    async (e: any) => {
      try {
        setLoading(true);
        await onClick(e);
      } catch (e) {
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [onClick]
  );

  const renderProps = useMemo<IAsyncButtonRenderProps>(
    () => ({ disabled: loading, onClick: handleClick }),
    [handleClick, loading]
  );

  return render(renderProps);
};

export default AsyncButton;
