import React, { Component } from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import { Link } from 'react-router-dom';

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header aria-label="IBM " className="ibm_header_blue">
          <SkipToContent />
          <HeaderName element={Link} to="/" prefix="IBM" />
          <HeaderNavigation aria-label="IBM">
            <HeaderMenuItem element={Link} to="/cfo-requests">
              Feed - CFO Request
            </HeaderMenuItem>
            <HeaderMenuItem>
              Authors
            </HeaderMenuItem>
            <HeaderMenuItem/>
            <HeaderMenuItem>
              Explore
            </HeaderMenuItem>
            <HeaderMenuItem>
              Blog
            </HeaderMenuItem>
            <HeaderMenuItem>
              Contact
            </HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Notifications">
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Avatar">
              <UserAvatar20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App Switcher">
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      </>
    );
  }
}
export default AppHeader;
