import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Customer
import CreateCustomer from "./pages/Customers/Create";
import EditCustomer from "./pages/Customers/Update";

// Market
import CreateMarket from "./pages/Markets/Create";
import EditMarket from "./pages/Markets/Update";
import ListMarket from "./pages/Markets/List";

// Donation
import CreateDonation from "./pages/Donation/Create";

// Publication
import CreatePublication from "./pages/Publications/Create";
import ListPublication from "./pages/Publications/List";

// Product
import CreateProduct from "./pages/Products/Create";
import EditProduct from "./pages/Products/Update";
import ListMarketProducts from "./pages/Products/ListByMarket";
import ListProducts from "./pages/Products/List";

// Home
import Home from "./pages/Home";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/*General routes*/}

                {/*Administration routes */}

                {/*Error route*/}

            </Switch>
        </BrowserRouter>
    )
}
