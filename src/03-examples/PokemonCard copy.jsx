import { PropTypes } from 'prop-types'

const PokemonCard = ({id, name, sprites = []}) => {
  return (
    <section>
      <h2 className="text-capitalize">#{id} - {name}</h2>
    
        
        {/* Imagenes */}
        <div >
            {sprites.map((sprite) => (
                <img key={sprite} src={sprite} alt={name} />
            ))}
        {/* <img src={sprites.front_default} alt={name} />
        <img src={sprites.back_default} alt={name} />
        <img src={sprites.front_shiny} alt={name} />
        <img src={sprites.back_shiny} alt={name} /> */}
        </div>
    </section>
  )
}

export default PokemonCard

PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.array.isRequired
}
