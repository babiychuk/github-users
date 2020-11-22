import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from '@material-ui/core/CircularProgress';

const TableLoader = ({ colSpan }) => {
    return (
        <TableRow>
            <TableCell colSpan={colSpan} align="center">
                <CircularProgress />
            </TableCell>
        </TableRow>
    );
}
export default TableLoader;