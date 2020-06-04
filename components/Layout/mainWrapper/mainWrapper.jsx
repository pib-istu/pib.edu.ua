import React, { Fragment } from "react";


const MainWrapper = props => {
    return (
        <Fragment>
            <div id="other_main">
                <div className="top">
                    <div className="bottom">
                        <div className="wrapper">
            {props.children ? props.children : null}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MainWrapper;
