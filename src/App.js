import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App({ user }) {
    let routes = null;
    if (user.userId === null) {
        routes = (
            <Switch>
                <Route exact path="/login" component={Login} />
                <Redirect to="/login" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        );
    }
    return (
        <Router>
            <Header />
            <Container>{routes}</Container>
            <Footer />
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(App);
