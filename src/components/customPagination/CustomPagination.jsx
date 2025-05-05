import { useGridApiContext, useGridSelector, gridPaginationSelector } from '@mui/x-data-grid';
import TablePagination from '@mui/material/TablePagination';
import { useState, useEffect } from 'react';

function CustomPagination() {
  const apiRef = useGridApiContext();
  const pagination = useGridSelector(apiRef, gridPaginationSelector);

  const [localRowsPerPage, setLocalRowsPerPage] = useState(pagination.pageSize ?? 10);

  useEffect(() => {
    setLocalRowsPerPage(pagination.pageSize ?? 10);
  }, [pagination.pageSize]);

  return (
    <TablePagination
      component="div"
      count={pagination.rowCount ?? 0}
      page={pagination.page ?? 0}
      onPageChange={(event, value) => apiRef.current.setPage(value)}
      rowsPerPage={localRowsPerPage}
      onRowsPerPageChange={(event) => {
        const pageSize = Number(event.target.value);
        apiRef.current.setPageSize(pageSize);
        apiRef.current.setPage(0);
        setLocalRowsPerPage(pageSize);
      }}
      labelRowsPerPage="Employees per page"
      rowsPerPageOptions={[10, 25, 50, 100]}
    />
  );
}

export default CustomPagination;
