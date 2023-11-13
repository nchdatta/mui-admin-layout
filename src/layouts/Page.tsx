import { Fragment } from "react";
import { Helmet } from "react-helmet-async";


const Page = ({ children = (<h4>Please add some children</h4>), title = "" }) => {
    return (
        <Fragment >
            <Helmet>
                <title>{`${title} | Ecomili Inspiration`}</title>
            </Helmet>
            {children}
        </Fragment>
    )
}

export default Page;