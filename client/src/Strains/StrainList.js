import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StrainCard from "./StrainCard";

export default class StrainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strains: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/strains")
      .then((res) => this.setState({ strains: res.data }))
      .catch((err) => console.log(err.response));
  }

  render() {
    return (
      <div className="strain-list">
        {this.state.strains.map((strain) => (
          <StrainDetails key={strain.id} strain={strain} />
        ))}
      </div>
    );
  }
}

function StrainDetails({ strain }) {
  return (
    <Link to={`/strains/${strain.id}`}>
      <StrainCard strain={strain} />
    </Link>
  );
}
