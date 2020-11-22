import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    arrowBack: {
        padding: theme.spacing(2),
    },
}));

const ButtonBack = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Link to={routes.UsersList.path} className={classes.arrowBack}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<ArrowBackIcon />}
                >
                    Back
                </Button>
            </Link>
        </Grid>
    );
}
export default ButtonBack;