import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/users/actions';

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from '@material-ui/core/TablePagination';
import UserItem from './UserItem';
import TableLoader from '../../common/TableLoader';

const headRows = [
  { id: 'login', numeric: false, label: 'Login' },
  { id: 'profile link', numeric: false, label: 'Profile link' },
];

const UsersList = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(state => state.users.list);
  const [page, setPage] = useState(Number.parseInt(localStorage.getItem(`users_page`)));
  const [rowsPerPage, setRowsPerPage] = useState(Number.parseInt(localStorage.getItem(`users_per_page`)));

  useEffect(() => {
    const localPage = localStorage.getItem(`users_page`);
    const localPerPage = localStorage.getItem(`users_per_page`);
    if(!localPage){
      setPage(0);
    }

    if(!localPerPage){
      setRowsPerPage(5);
    }
  }, [])

  useEffect(() => {
    const per_page = 100;
    dispatch(getUsers(per_page));
  }, [dispatch])

  const handleChangePage = (event, pageNum) => { 
    setPage(pageNum);
    localStorage.setItem(`users_page`, pageNum);   
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value); 
    handleChangePage(event, 0);
    localStorage.setItem(`users_per_page`, event.target.value);
  }
  
  return <div>
    <Paper className='m020'>
      <Table>
        <TableHead >
          <TableRow className='tableHead'>
            {headRows.map(row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
              >
                {row.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? <TableLoader colSpan={3}/> :
            data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={loading ? rowsPerPage : data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  </div>;
};

export default UsersList;