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
    </Helmet>
)

export default Head