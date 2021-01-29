import React from "react";
import { Router } from "@reach/router";

import Detail from "../../components/Detail"

const Routes = (props) => {

    const { numericCode } = props;

    return (
        <Router>
           <Detail path="../detail/" />;
        </Router>
    )


};

export default Routes;