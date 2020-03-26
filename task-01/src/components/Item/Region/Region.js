import React from "react";


const Region = (props) => {

  return (
    <div className="region">
      <p className="city">City: {props.name ? props.name : 'Kharkiv'} {props.country ? props.country : 'UA'}</p>
      <p className="date"> {props.date ? props.parseDate(props.date) : 'Today'} </p>
    </div>
  )
};

export default Region;