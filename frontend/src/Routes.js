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
                <Route path="/" exact component={Home} />
                <Route path="/create/market" component={CreateMarket} />
                <Route path="/create/user" component={CreateCustomer} />
                <Route path="/list/products" component={ListMarketProducts} />
                <Route path="/create/donation" component={CreateDonation} />

                {/*Administration routes */}
                <Route path="create/product" component={CreateProduct} />
                <Route path="/edit/product" component={EditProduct} />
                <Route path="/edit/user" component={EditCustomer} />
                <Route path="/edit/market" component={EditMarket} />
                <Route path="/list/markets" component={ListMarket} />
               <Route path="/list/products" component={ListProducts} />
               <Route path="/list/publication" component={ListPublication} />
                {/*Error route*/}

                {/*Rotas dos devs*/}
                <Route path="create/publication" component={CreatePublication} />


            </Switch>
        </BrowserRouter>
    )
}
