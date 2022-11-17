import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
     { field: 'id', headerName: 'ID', width: 70 },
     { field: 'title', headerName: 'Title', width: 130 },
     { field: 'author', headerName: 'Author', width: 130 },
     { field: 'date', headerName: 'Date', with: 150 }
];



const TableNews = () => {
     const [newsInfo, setNewsInfo] = useState([])

     const fecthNews = async () => {
          const response = await axios.get("http://localhost:8000/news")
          setNewsInfo(response.data)
          console.log(response);
     }
     useEffect(() => {
          fecthNews()
     }, [])

     return (
          <div style={{ height: 500, width: '100%' }}>
               <DataGrid
                    rows={newsInfo}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
               />
          </div>
     );
}

export default TableNews