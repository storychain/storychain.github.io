import { h, Component } from 'preact';
import { LayoutHeader, LayoutHeaderRow, LayoutTitle } from 'preact-mdl';

export default class Header extends Component {
  render() {
    return (
      <LayoutHeader>
        <LayoutHeaderRow>
          <LayoutTitle>
            Storychain
          </LayoutTitle>
        </LayoutHeaderRow>
      </LayoutHeader>
    );
  }
}
