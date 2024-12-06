type WithListProps<T> = {
  dataList: T[];
};

export function withList<T>(
  WrappedComponent: React.ComponentType<WithListProps<T>>,
  useData: () => T[]
) {
  return function WithList(props: WithListProps<T>) {
    const dataList = useData();
    return <WrappedComponent {...props} dataList={dataList} />;
  };
}
