import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loader from "../components/Loader";

export const AuthenticationGuard = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div className="loader">
                <Loader />
            </div>
        ),

    });

    return <Component />;
};
