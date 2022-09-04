import React from 'react';
import { ListItem } from './ListItem/listItem';
import './style.css';

export function List(props) {
  let showHideList = props.showHideList;
  console.log(showHideList);

  let [over, setOver] = React.useState(showHideList);
  if (over) {
    showHideList = true;
  } else {
    if (props.showHideList) {
      setTimeout(() => {
        showHideList = false;
      }, 500);
    } else {
      showHideList = false;
    }
  }
  if (showHideList) {
    return (
      <div
        className="listWrapper"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => {
          setOver(false);
        }}
      >
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }
}
