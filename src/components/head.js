import React from "react"
import { Helmet } from "react-helmet"

import "../css/global.css"

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'
// loads the Icon plugin
UIkit.use(Icons);

const Head = () => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>Alex Cesar.com</title>
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" /> */}
    </Helmet>
)

export default Head