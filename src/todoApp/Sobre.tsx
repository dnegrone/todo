import React, {Component} from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

interface Props {
    exact?: boolean;
    link: string;
    path: string;
    sensitive?: boolean;
    strict?: boolean;
}

const Sobre: React.FC<Props> = (props: Props) => {
    const { link, ...routeProps } = props;
    return(
        <Route {...routeProps} render={ () => {
            window.location.replace(props.link);
            return null;
        } } />
    )
}

export default Sobre;