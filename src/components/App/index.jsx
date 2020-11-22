import React, { Suspense } from 'react';
import { Route, Switch, Redirect, } from 'react-router-dom';
import routes from '../../routes';

import Header from '../Landing/Header';
import Footer from '../Landing/Footer';
import CircularProgress from '@material-ui/core/CircularProgress';

const App = () => {
    return (
        <div>
            <Header />
            <>
                <Suspense
                    fallback={
                        <div>
                            <CircularProgress />
                        </div>
                    }
                >
                    <Switch>
                        <Route
                            path={routes.UsersList.path}
                            component={routes.UsersList.component}
                        />
                        <Route
                            path={`${routes.UserProfile.path}:id`}
                            component={routes.UserProfile.component}
                        />
                        <Redirect to={routes.UsersList.path} />
                    </Switch>
                </Suspense>
            </>
            <Footer />
        </div>
    );
};

export default App;
