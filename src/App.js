import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import Navigation from "./components/navigation/navigation.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { GlobalStyle } from "./global.styles";
import Footer from "./components/footer/footer.component";
import LazySpinner from "./components/lazySpinner/lazy-spinner.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInSignUp = lazy(() =>
  import("./pages/signin-signup/signin-signup.componenet")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

class App extends React.Component {
  unsubscribeFromAuth = null;

  /* FIREBASE CODE -- checks if current user is in database and sets currentUser state accordingly */
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <GlobalStyle />
        {/* NAVIGATION BAR AND BODY ROUTING BELOW */}
        <Navigation className="nav" />
        <Switch>
          <Suspense fallback={<LazySpinner />}>
            <Route exact path="/" component={HomePage} />

            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
              }
            />
            <Route path="/checkout" component={CheckoutPage} />
          </Suspense>
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
