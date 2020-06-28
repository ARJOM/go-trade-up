import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./utils/PrivateRoute";

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

// Not Found
import NotFound from "./pages/NotFound";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/*General routes*/}
                <Route path="/" exact component={Home} />
                <Route path="/create/market" component={CreateMarket} />
                <Route path="/create/user" component={CreateCustomer} />
                <Route path="/list/publication" component={ListPublication} />

                {/*Authenticated routes*/}
                <PrivateRoute path="/list/products" component={ListProducts} />
                <PrivateRoute path="/create/donation" component={CreateDonation} />

                {/*Market routes */}
                <PrivateRoute path="create/product" component={CreateProduct} />
                <PrivateRoute path="/edit/product/:id" component={EditProduct} />
                <PrivateRoute path="/edit/user" component={EditCustomer} />
                <PrivateRoute path="/edit/market" component={EditMarket} />
                <PrivateRoute path="/list/markets" component={ListMarket} />
                <PrivateRoute path="/list/products/:id" component={ListMarketProducts} />

                {/*Admin routes*/}
                <PrivateRoute path="create/publication" component={CreatePublication} />

                {/*Error route*/}
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
