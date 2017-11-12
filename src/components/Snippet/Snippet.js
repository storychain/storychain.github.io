import { h, Component } from 'preact';
import { Cell, Grid } from 'preact-mdl';

const style = {
  fontSize: 18,
  fontWeight: 300,
  lineHeight: 1.75,
  margin: '0 auto',
  marginTop: 20,
};

export default class Snippet extends Component {
  shouldComponentUpdate() {
    // prevent mdl classes from being overridden during update
    return false;
  }

  render() {
    return (
      <Grid>
        <Cell className="mdl-cell--5-col" style={style}>
          {this.props.children}
        </Cell>
      </Grid>
    );
  }
}
