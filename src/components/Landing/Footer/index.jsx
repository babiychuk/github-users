
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#ddeeff',
        padding: theme.spacing(6),
        marginTop: theme.spacing(2),
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
        </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                some text
        </Typography>
        </footer>
    );
};

export default Footer;
