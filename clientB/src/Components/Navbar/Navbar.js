import React from 'react';
import { connect } from 'react-redux';
import './Navbar.css';
import DropdownHead from '../DropdownHead/DropdownHead';

class Navbar extends React.Component {
  render() {
    const switcherHead = (<p>Switcher</p>);
    const switcherOption = [
      { url: '#',
        content: (<p>switch app</p>)
      }
    ];
    const profileHead = (<p>Profile</p>);
    const profileOption = [
      { url: '#',
        content: this.props.auth ? (<p>profile</p>) : (<a href="/auth/facebook">Login</a>)
      }
    ];
    return (
      <div className="Navbar">
        <DropdownHead headContent={switcherHead}
          menuOptions={switcherOption} />
        <DropdownHead headContent={profileHead}
          menuOptions={profileOption} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Navbar);