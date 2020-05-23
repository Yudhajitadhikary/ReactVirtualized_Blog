import React from "react";
import PropTypes from "prop-types";
import { List, AutoSizer } from "react-virtualized";
class Lists extends React.PureComponent {
 render() {
    let { data } = this.props;

    return (
      <div
        style={{
          marginTop: "10px",
          height: "100vh",
        }}
      >
        <AutoSizer>
          {({ height, width }) => {
            console.log(data);

            const itemsPerRow = 1;
            const rowCount = Math.ceil(100 / itemsPerRow);

            return (
              <div>
                <List
                  width={width}
                  height={height}
                  rowCount={rowCount}
                  rowHeight={100}
                  rowRenderer={({ index, key, style }) => {
                    const items = [];
                    const fromIndex = index * itemsPerRow;
                    const toIndex = Math.min(fromIndex + itemsPerRow, 100);

                    for (let i = fromIndex; i < toIndex; i++) {
                      data.map(
                        (pokemon, index) =>
                          index === i &&
                          items.push(
                            <div
                              style={{
                                color: "yellow",
                              }}
                            >
                              <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                alt=""
                              />
                              <div>{pokemon.name}</div>
                            </div>
                          )
                      );
                    }

                    return (
                      <div key={key} style={style}>
                        {items}
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        </AutoSizer>
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.array,
};

export default Lists;
