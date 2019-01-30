import React, { lazy, Suspense } from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

const Home = lazy(async () => { return { default: (await import('./views/home')).Home }; });
const Components = lazy(async () => { return { default: (await import('./views/components')).Components }; });
const Api = lazy(async () => { return { default: (await import('./views/api')).Api }; });
const NotFound = lazy(async () => { return { default: (await import('./views/not-found')).NotFound }; });

interface IAppState {
  isOpen: boolean;
}

export class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  private toggle = (): void => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // tslint:disable-next-line:member-ordering
  public render(): JSX.Element {
    return (
      <HashRouter>
        <div className="App">
          <Navbar dark color="dark" expand="md" fixed="top">
            <NavbarBrand tag={Link} to="/">Ocean Forms</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/components">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/api">API</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/environment-agency-austria/react-ocean-forms">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <div className="content container">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/components" component={Components} />
                <Route path="/api" component={Api} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </HashRouter>
    );
  }
}
