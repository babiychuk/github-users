import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../routes';

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(12.5),
        height: theme.spacing(12.5),
    },
    color: { color: '#224456', },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

const UserItem = ({ user }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [hoverUser, setHoverUser] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setHoverUser(!hoverUser);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setHoverUser(!hoverUser);
    };

    const open = Boolean(anchorEl);

    return (
        <TableRow key={user.id} >
            <TableCell align="left">
                <Typography
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    hover onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    <Link to={`${routes.UserProfile.path}${user.login}`}>{user.login}</Link>
                </Typography>
                {hoverUser && 
                <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Avatar alt={user.avatar_url} src={user.avatar_url} className={classes.large} />
                </Popover> }
            </TableCell>
            <TableCell align="left"><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a></TableCell>
        </TableRow>
    )
};

export default UserItem;