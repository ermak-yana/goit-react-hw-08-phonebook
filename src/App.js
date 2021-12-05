import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import PrivateRouter from "./components/privateRouter/PrivateRouter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "./redux/Auth/AuthOperation";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUser());
  }, [dispatch]);

  return (
    <section className="container">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRouter path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <NotificationContainer />
    </section>
  );
}

export default App;
