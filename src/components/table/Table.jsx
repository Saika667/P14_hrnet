import * as React from 'react'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { TextField, Box } from '@mui/material'
import CustomPagination from '../customPagination/CustomPagination'
import SearchBar from '../searchBar/SearchBar'

const rows = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 32 },
    { id: 3, name: 'Charlie', age: 28 },
    { id: 4, name: 'David', age: 22 },
    { id: 5, name: 'Emma', age: 30 },
];
const header = [
    { field: 'first', headerName: 'First Name', disableColumnMenu: true, flex: 1 },
    { field: 'last', headerName: 'Last Name', disableColumnMenu: true, flex: 1 },
    { field: 'start', headerName: 'Start Date', disableColumnMenu: true, flex: 1 },
    { field: 'department', headerName: 'Department', disableColumnMenu: true, flex: 1 },
    { field: 'birth', headerName: 'Date of Birth', disableColumnMenu: true, flex: 1 },
    { field: 'street', headerName: 'Street', disableColumnMenu: true, flex: 1 },
    { field: 'city', headerName: 'City', disableColumnMenu: true, flex: 1 },
    { field: 'state', headerName: 'State', disableColumnMenu: true, flex: 1 },
    { field: 'zipcode', headerName: 'Zip Code', disableColumnMenu: true, flex: 1 }
]  
const datas = [
    { id: 1, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 2, first: 'Robert', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 3, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 4, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 5, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 6, first: 'Jean', last: 'Roby', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 7, first: 'Marie', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 8, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 9, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 10, first: 'Jean', last: 'Rob', start: '04/05/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 11, first: 'Jean', last: 'Roofh', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 12, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 13, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 14, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 15, first: 'Jean', last: 'Robfqs', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romolu', state: 'AL', zipcode: '11111'},
    { id: 16, first: 'Jean', last: 'Rob', start: '04/05/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 17, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 18, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 19, first: 'Jean', last: 'Rob', start: '04/06/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 20, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 21, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
    { id: 22, first: 'Jean', last: 'Rob', start: '04/02/2011', department: 'Sales', birth: '03/11/2023', street: 'rue des joins', city: 'Romo', state: 'AL', zipcode: '11111'},
]
const columns = [
    { field: 'name', headerName: 'Nom', width: 150 },
    { field: 'age', headerName: 'Âge', width: 100, type: 'number' },
];

function Table ({ data, label, name, id, classname }) {
    console.log(data)
    const [ searchText, setSearchText ] = useState('')
    const [filteredRows, setFilteredRows] = useState(datas)

    const handleSearch = (e) => {
        const value = e.target.value
        setSearchText(value)
        const filtered = datas.filter((row) => 
            Object.values(row).some((field) => 
                field.toString().toLowerCase().includes(value.toLowerCase())
            )
        )
        setFilteredRows(filtered)
    }
    return (
        <Box style={{ height: '73vh', width: '100%' }}>
            <SearchBar value={ searchText } onChange={ handleSearch } />

            <DataGrid
                className='table'
                rows={ filteredRows }
                columns={ header }
                pageSizeOptions={ [10, 25, 50, 100] }
                initialState={{
                    pagination: { paginationModel: { pageSize: 10, page: 0 } },
                }}
                pagination
                disableRowSelectionOnClick
                sx={{
                    overflowX: 'auto',
                    borderRadius: '15px',
                    backgroundColor: 'transparent',
                    maxHeight: '66vh',
                    '& .MuiDataGrid-container--top [role=row]': {
                        background: '#242471',
                        borderRadius: '12px 12px 0 0',
                        overflow: 'hidden',
                    },
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: '#242471',
                        color: 'white',
                        fontFamily: '"Montserrat", sans-serif',
                    },
                    '& .MuiDataGrid-main': {
                        borderRadius: '0 0 15px 15px',
                        backgroundColor: '#f3f0fd',
                    },
                    '& .MuiDataGrid-cell': {
                        fontSize: '14px',
                    },
                    '& .MuiDataGrid-row:hover': {
                        backgroundColor: '#d1c9fd',
                    },
                    '& .MuiDataGrid-iconButtonContainer': {
                        display: 'none',
                    },
                    '& .MuiSvgIcon-root': {
                        fill: 'white',
                    },
                    '& .MuiDataGrid-columnSeparator': {
                        display: 'none',
                    },
                    '& .MuiTablePagination-selectLabel': {
                        position: 'absolute',
                        left: '0',
                        fontFamily: '"Montserrat", sans-serif',
                        color: '#242471',
                        fontWeight: '600',
                    },
                    '& .MuiInputBase-root': {
                        position: 'absolute',
                        left: '11rem',
                        fontFamily: '"Montserrat", sans-serif',
                        color: '#242471',
                        fontWeight: '600',
                    },
                    '& .MuiTablePagination-root': {
                        width: '100%',
                    },
                    '& .MuiSvgIcon-root': {
                        fill: '#9a89ff',
                    },
                    '& .MuiTablePagination-spacer': {
                        display: 'none',
                    },
                    '& .MuiToolbar-root': {
                        justifyContent: 'center',
                    },
                    '& .MuiTablePagination-actions': {
                        position: 'absolute',
                        width: '15rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginLeft: '0 !important',
                    },
                    '& .MuiTablePagination-displayedRows': {
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: '600',
                        color: '#242471',
                    },
                    '& .MuiDataGrid-cell': {
                        fontFamily: '"Montserrat", sans-serif',
                        color: '#242471',
                        textAlign: 'center',
                    },
                    '& .MuiDataGrid-columnHeaderTitleContainer': {
                        justifyContent: 'center',
                    },
                    '& .MuiDataGrid-iconButtonContainer': {
                        visibility: 'visible',
                        opacity: 1,
                    },
                }}
                slots={{
                    pagination: CustomPagination,
                }}
            />
        </Box>
    )
}

export default Table