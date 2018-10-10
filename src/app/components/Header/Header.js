import React from 'react';
import { NavLink,Link} from 'react-router-dom';

import logo from './logo.png'
import style from "./style.css"


export const Header = ()=>{
    const isActive = (path, match, location) => !!(match || path === location.pathname);

    return(
        <div className="">
            <div className="row">
                <nav className="navbar navbar-default" style={style.nav}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to={"/"}>
                                <img className="d-inline-block mr-1" src={logo}width="120" height="50" alt="ReactApp"/>
                            </Link>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="nav">
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to={"/"} activeClassName="active">Home</NavLink></li>
                                <li><NavLink to={"/dashboard"} activeClassName="active">Dashboard</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );

};

