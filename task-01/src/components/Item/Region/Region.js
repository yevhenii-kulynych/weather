import React from "react";


const Region = (props) => {

  return (
    <div className="region">
      <p className="city">City: Kharkiv</p>
      <p className="date"> {props.date ? props.parseDate(props.date) : 'Today'} </p>
    </div>
  )
};

export default Region;