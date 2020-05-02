import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Cannabis Strains:</h3>
        {this.props.list.map((strain) => {
          return (
            <NavLink
              to={`/strains/${strain.id}`}
              key={strain.id}
              activeClassName="saved-active"
            >
              <span className="saved-strain">{strain.title}</span>
            </NavLink>
          );
        })}
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
        <div>
          <a href="https://med-cabinet-react.netlify.app/">
            Login and Register
          </a>
        </div>
      </div>
    );
  }
}
