import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Strains/Header";
import StrainList from "./Strains/StrainList";
import StrainPage from "./Strains/StrainPage";
import UpdateForm from "./Strains/UpdateForm";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (strain) => {
    setSavedList([...savedList, strain]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={StrainList} />
      <Route
        path="/strains/:id"
        render={(props) => {
          return <StrainPage {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        path="/update-strain/:id"
        render={(props) => <UpdateForm {...props} />}
      />
    </>
  );
};

export default App;
