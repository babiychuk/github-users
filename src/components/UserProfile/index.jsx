import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { getUserProfile } from '../../redux/users/actions';

import ButtonBack from '../../common/ButtonBack';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading } = useSelector(state => state.users.profile);

  useEffect(() => {
    dispatch(getUserProfile(id));
  }, [dispatch, id])

  return (
    <div className={classes.root}>
      <ButtonBack />
      <Paper className={classes.paper}>
        {loading ?
          <Grid container alignItems='center'>
            <CircularProgress />
          </Grid>
          :
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={data?.avatar_url} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {data?.name ? data?.name : "is missing"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Followers: {data?.followers ? data?.followers : "is missing"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Followers: {data?.following ? data?.following : "is missing"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Created: {data?.created_at ? moment(data?.created_at).format('YYYY/MM/DD') : "is missing"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Company: {data?.company ? data?.company : "is missing"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: {data?.email ? data?.email : "is missing"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Location: {data?.location ? data?.location : "is missing"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Blog: {data?.blog ? data?.blog : "is missing"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Bio: {data?.bio ? data?.bio : "is missing"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        }
      </Paper>
    </div>
  )
};

export default UserProfile;