import React from "react";
import { Outlet } from "react-router-dom";

import StyledNavBar from "../header/StyledNavBar";

export default function Root() {
    return (
        <div>
            <StyledNavBar />
            <Outlet />
        </div>
    );
}
