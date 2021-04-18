import React, { useContext } from 'react';
import { Route,Redirect,} from "react-router-dom";
import { userContext } from '../../App';
  
const PrivetRoute = ({ children, ...rest }) => {
    const [loogeduser,setLoogeduser]=useContext(userContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loogeduser.email ? (
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

export default PrivetRoute;