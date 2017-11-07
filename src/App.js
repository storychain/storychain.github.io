import { h, Component } from 'preact';
import { Cell, Grid, Layout, LayoutContent } from 'preact-mdl';
import 'material-design-lite/material';
import Router from 'preact-router';

import Header from './components/Header';
import Home from './views/Home';
import Sidebar from './components/Sidebar';

export default class App extends Component {
  render() {
    return (
      <Layout fixed-header>
        <Header />
        <Sidebar />
        <LayoutContent>
          <Grid>
            <Cell>
              <Router>
                <Home path="/" />
              </Router>
            </Cell>
          </Grid>
        </LayoutContent>
      </Layout>
    );
  }
}
