import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { BookCotext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const { value, value2 } = useContext(BookCotext)
    const [loogedIdUser, setLoggedInUser] = value

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loogedIdUser.name ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;