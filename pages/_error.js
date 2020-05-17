import Custom404 from './404';
import React from "react";

function Error({ statusCode }) {
    return (
        <div>
            {statusCode
                ? <Custom404 />
                : <h1>An error occurred on client</h1>
            }
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode }
};

export default Error