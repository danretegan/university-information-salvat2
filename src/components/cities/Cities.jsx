import { Component } from "react";
import AddCitiesForm from "./AddCitiesForm";
import Icon from "../common/icon/Icon";
import Button from "../common/button/Button";

class Cities extends Component {
  state = {
    isAddCityFormVisible: false,
    list: [],
  };

  render() {
    const { isAddFormVisible, list } = this.state;

    return (
      <div>
        <h2>
          <Icon variant="pin" label="cities" />
          <span>Cities</span>
        </h2>
        <div>{this.renderList(list)}</div>
        {isAddFormVisible && (
          <AddCitiesForm onFormSubmit={this.handleAddItem} />
        )}
        <Button
          action={() => {
            this.setState({
              isAddFormVisible: true,
            });
          }}
        >
          Add City
        </Button>
      </div>
    );
  }

  renderList(list) {
    if (!list || list.length === 0) {
      return <div>There are no cities added</div>;
    }

    return list.map((item) => (
      <div key={item.id}>
        <span>{item.name}</span>
      </div>
    ));
  }

  handleAddItem = (item) => {
    const list = this.state.list.sort((a, b) => a.id > b.id);

    const newId = list.length > 0 ? list.length + 1 : 0;

    const itemToAdd = {
      id: newId,
      name: item.name,
    };

    this.setState((prevState) => {
      return {
        list: [...prevState.list, itemToAdd],
        isAddFormVisible: false,
      };
    });
  };
}

export default Cities;
