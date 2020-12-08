import React, { useState, useEffect } from "react"
import {Route} from "react-router-dom"

import Header from "../common/Header"
import BodyPage from "../BodyPage"
import ProductPage from "../ProductPage"

import store from "../../store"

function HomePage() {

    useEffect(() => {
        console.log(store.getState());
    }, [])

    return (
        <div className="App">
            <Header />
            <Route exact path="/home">
                <BodyPage />
            </Route>
            <Route path="/home/product">
                <ProductPage />
            </Route>
        </div>
        
    )
}

export default HomePage;