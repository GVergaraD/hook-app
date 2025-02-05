import { PropTypes } from 'prop-types';
import { memo } from "react";
 
export const Small = memo(({ value }) => {
 
    console.log('Me volvi a generar');
 
    return (
        <small>{value}</small>
    )
})
 
Small.displayName = 'Small'; // Esta es la solucion
export default Small;

Small.propTypes = {
    value: PropTypes.number.isRequired
}
