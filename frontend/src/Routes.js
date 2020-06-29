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
import ListProducts from "./pages/Products/ListByMarket";
import ListMarketProducts from "./pages/Products/List";

// Home
import Home from "./pages/Home";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/*General routes*/}
                <Route path="/" exact component={Home} />
                <Route path="/create/market" exact component={CreateMarket} />
                <Route path="/create/donation" component={CreateDonation} />
                <Route path="/create/user" component={CreateCustomer} />
                {/*Administration routes */}
                <Route path="/edit/user" component={ListMarketProducts} />
                {/*Error route*/}

            </Switch>
        </BrowserRouter>
    )
}
