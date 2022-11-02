import React from "react";
import Home from "../../components/Home";
import DefaultLayout from "../../components/layouts/DefualtLayout"

class HomePage extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    )
  }
}

export default HomePage;