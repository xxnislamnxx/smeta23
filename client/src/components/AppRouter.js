
import React,{useContext} from "react";
import {Switch , Route, Redirect} from 'react-router-dom';
import {  publicRoutes } from "../routes";
import { PROJECT_ROUTE } from "../utils/consts";
import { Context } from "../index";
const AppRouter = () => {

    return (
        <Switch>
             {publicRoutes.map(({ path, Component }) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={PROJECT_ROUTE}/> {/*Если перейти на не существующую страницу -> редерект на дефолт*/}
            
        </Switch>

    );

};
export default AppRouter;

