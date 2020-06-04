import React, { Fragment, useEffect, useState } from "react";
import Header from './Header/Header';
import MainWrapper from './mainWrapper/mainWrapper';
import FrontPage from '../FrontPage/FrontPage';
import Footer from './Footer/Footer';


const Layout = props => {
    const [isFrontPage, setFrontPage] = useState(false);
    const [isSidebar, setSidebar] = useState(false);

    useEffect(() => {
        const {isFront} = props;

        if(isFront) setFrontPage(true);
        if(isSidebar) setSidebar(true);
    });

    return (
        <Fragment>
            <Header isFront={isFrontPage} />
            {isFrontPage ?
                <FrontPage />
            :
                <MainWrapper isSidebar={isSidebar}>
                    {props.children ? props.children : null}
                </MainWrapper>
            }
            <Footer />
        </Fragment>
    );
};

export default Layout;
