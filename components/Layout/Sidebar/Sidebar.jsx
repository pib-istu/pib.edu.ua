import React, { Fragment } from "react";


const Sidebar = props => {
    return (
        <Fragment>
            <div id="other_menu_wrapper">
            </div>
            <div className="bottom_end">
                <ul className="menu" id="other_menu">
                            {props.children ? props.children : null}
                </ul>
            </div>
        </Fragment>
    );
};

export default Sidebar;
