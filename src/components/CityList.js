import React, { Component } from 'react';
import { Port, renderCityName } from './data/port-data2';
import Autocomplete from 'react-autocomplete';
import './Autocomplete.css';

class CityList extends Component {

  state = { val: '' };

  render() {
    return (
      <div className="autocomplete-wrapper">
              <Autocomplete
          value={this.state.val}
          items={Port()}
          getItemValue={item => item.name}
          shouldItemRender={renderCityName}
          renderMenu={item => (
            <div className="dropdown">
              {item}
            </div>
          )}
          renderItem={(item, isHighlighted) =>
            <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
              {item.name}
            </div>
          }
          onChange={(event, val) => this.setState({ val })}
          onSelect={val => this.setState({ val })}
        />
      </div>
    );
  }
}

export default CityList;