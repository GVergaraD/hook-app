import { useState } from "react";
import { useLayoutEffect, useRef } from "react";
import { PropTypes } from "prop-types";

const PokemonCard = ({ id, name, sprites = [] }) => {
  const h2Ref = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = h2Ref.current.getBoundingClientRect();
    setBoxSize({ height, width });
    console.log({ height, width });
    // h2Ref.current.style.textTransform = "capitalize";
  }, [name]);

  return (
    <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
      <h2 ref={h2Ref} className="text-capitalize">
        #{id} - {name}
      </h2>

      {/* Imagenes */}
      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
        {/* <img src={sprites.front_default} alt={name} />
        <img src={sprites.back_default} alt={name} />
        <img src={sprites.front_shiny} alt={name} />
        <img src={sprites.back_shiny} alt={name} /> */}
      </div>

      <pre>{JSON.stringify(boxSize)}</pre>
    </section>
  );
};

export default PokemonCard;

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.array.isRequired,
};
