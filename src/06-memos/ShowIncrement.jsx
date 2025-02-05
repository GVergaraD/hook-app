import React  from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
const ShowIncrement = React.memo( ({ increment }) => {

    console.log('Me volvi a generar :(')

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};

export default ShowIncrement;
