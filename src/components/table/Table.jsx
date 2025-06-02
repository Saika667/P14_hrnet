import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import CustomPagination from '../customPagination/CustomPagination'
import SearchBar from '../searchBar/SearchBar'
import { useSelector } from 'react-redux'

const header = [
    { field: 'first-name', headerName: 'First Name', disableColumnMenu: true, flex: 1 },
    { field: 'last-name', headerName: 'Last Name', disableColumnMenu: true, flex: 1 },
    { field: 'start', headerName: 'Start Date', disableColumnMenu: true, flex: 1 },
    { field: 'department', headerName: 'Department', disableColumnMenu: true, flex: 1 },
    { field: 'birth', headerName: 'Date of Birth', disableColumnMenu: true, flex: 1 },
    { field: 'street', headerName: 'Street', disableColumnMenu: true, flex: 1 },
    { field: 'city', headerName: 'City', disableColumnMenu: true, flex: 1 },
    { field: 'state', headerName: 'State', disableColumnMenu: true, flex: 1 },
    { field: 'zipcode', headerName: 'Zip Code', disableColumnMenu: true, flex: 1 }
]  

function Table () {
    const [ searchText, setSearchText ] = useState('')
    const [filteredRows, setFilteredRows] = useState(null)

    const employeesList = useSelector(({user}) => user.employees)

    const handleSearch = (e) => {
        const value = e.target.value
        setSearchText(value)
        const filtered = employeesList.filter((row) => 
            Object.values(row).some((field) => 
                field.toString().toLowerCase().includes(value.toLowerCase())
            )
        )
        setFilteredRows(filtered)
    }

    useEffect(() => {
        setFilteredRows(employeesList)
    }, [employeesList])

    return (
        <Box
            sx={{
                height: '73vh',
                width: '100%',
                '@media (max-width:768px)': {
                    height: 'auto',
                },
            }}
        >
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
                    '& .MuiDataGrid-row:hover': {
                        backgroundColor: '#d1c9fd',
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
                        '@media (max-width:768px)': {
                            top: '0',
                        },
                    },
                    '& .MuiInputBase-root': {
                        position: 'absolute',
                        left: '11rem',
                        fontFamily: '"Montserrat", sans-serif',
                        color: '#242471',
                        fontWeight: '600',
                        '@media (max-width:768px)': {
                            top: '0.6rem',
                        },
                    },
                    '& .MuiTablePagination-root': {
                        width: '100%',
                        '@media (max-width:768px)': {
                            height: '72px',
                        },
                    },
                    ' & .MuiTablePagination-actions .MuiSvgIcon-root, & .MuiTablePagination-select .MuiSvgIcon-root': {
                        fill: '#9a89ff',
                    },
                    '& .MuiSvgIcon-root': {
                        fill: 'white'
                        // fill: '#9a89ff',
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
                        '@media (max-width:768px)': {
                            top: '2.5rem',
                        },
                    },
                    '& .MuiTablePagination-displayedRows': {
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: '600',
                        color: '#242471',
                        '@media (max-width:768px)': {
                            marginTop: '3rem',
                        },
                    },
                    '& .MuiDataGrid-cell': {
                        fontSize: '14px',
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
                    '& .MuiDataGrid-footerContainer': {
                        '@media (max-width:768px)': {
                            height: '72px',
                        },
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