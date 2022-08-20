import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import style from '../../styles/Navbar.module.css';

import { removeAuth } from '../../features/authSlice';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import Score from '../navbar/Score';

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}  className="ms-1">
        <DropdownToggle split size="sm" className={style.signup}>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Score:</DropdownItem>
          <DropdownItem text>
            RPS Game
            <Score />
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href='/profile'>
            Show Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => {
            this.props.logout()
          }}>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}


const MapDispatchToProps = (dispatch) => {

  const router = useRouter()

  return {
    logout: () => {
        window.confirm("Are you sure want to logout?");
        dispatch(removeAuth());
        router.push('/');      
    }
  }
}

export default connect(null, MapDispatchToProps)(DropdownButton)