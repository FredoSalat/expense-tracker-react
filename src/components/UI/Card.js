import React from "react";

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  /* Enabling so that a classname can be set on a custom component
   card is a default class and any class recived from the outside is
   added to that string */

  return <div className={classes}>{props.children}</div>;
  /*  Whenever this component is invoked {props.children} will also
      be displayed and this is just a reference to what is between 
      the opening and closing tags of the component. */
};

export default Card;
