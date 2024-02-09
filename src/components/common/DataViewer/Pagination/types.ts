type PaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
  offset?: number;
};

export { PaginationProps };
