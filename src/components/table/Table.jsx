import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 32 },
  { id: 3, name: 'Charlie', age: 28 },
  { id: 4, name: 'David', age: 22 },
  { id: 5, name: 'Emma', age: 30 },
];

const columns = [
  { field: 'name', headerName: 'Nom', width: 150 },
  { field: 'age', headerName: 'Âge', width: 100, type: 'number' },
];

function Table ({ data, label, name, id, classname }) {
    console.log(data)
    return (
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[2, 5, 10]}
            initialState={{
            pagination: { paginationModel: { pageSize: 2, page: 0 } },
            }}
            pagination
            disableRowSelectionOnClick
        />
        </div>
    )
}

export default Table