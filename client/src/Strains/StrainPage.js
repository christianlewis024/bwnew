import React from "react";
import axios from "axios";
import StrainCard from "./StrainCard";

export default class Strain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strain: null,
    };
  }

  componentDidMount() {
    this.fetchStrain(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchStrain(newProps.match.params.id);
    }
  }

  fetchStrain = (id) => {
    axios
      .get(`http://localhost:5000/api/strains/${id}`)
      .then((res) => this.setState({ strain: res.data }))
      .catch((err) => console.log(err.response));
  };

  saveStrain = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.strain);
  };

  handleEditClick = (e) => {
    e.preventDefault();
    this.props.history.push(`/update-strain/${this.state.strain.id}`);
  };

  deleteItem = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/strains/${this.state.strain.id}`)
      .then((res) => {
        this.props.history.push(`/`);
      })
      .catch((err) => console.log(err));
  };

  render() {
    if (!this.state.strain) {
      return <div>Loading strain information...</div>;
    }

    return (
      <div className="save-wrapper">
        <StrainCard strain={this.state.strain} />
        <div className="save-button" onClick={this.saveStrain}>
          Save
        </div>
        <button className="edit-button" onClick={this.handleEditClick}>
          Edit
        </button>
        <button className="delete-button" onClick={this.deleteItem}>
          Delete
        </button>
      </div>
    );
  }
}
