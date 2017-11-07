import { h, Component } from 'preact';
import {
  LayoutDrawer,
  LayoutTitle,
  Navigation,
  NavigationLink,
} from 'preact-mdl';

export default class Sidebar extends Component {
  hide = () => {
    const drawerElement = this.base;
    drawerElement.classList.remove('is-visible');
    const overlayElement = drawerElement.parentNode.querySelector(
      '.mdl-layout__obfuscator'
    );
    overlayElement.classList.remove('is-visible');
  };

  render() {
    return (
      <LayoutDrawer>
        <LayoutTitle>Storychain</LayoutTitle>
        <Navigation onClick={this.hide}>
          <NavigationLink href="/">Home</NavigationLink>
        </Navigation>
      </LayoutDrawer>
    );
  }
}
