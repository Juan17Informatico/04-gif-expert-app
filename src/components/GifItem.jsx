import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    );
};

GifItem.propTypes = {
    title: PropTypes.string.isRequired, 
    url: PropTypes.string.isRequired
};

// GifItem.defaultProps = {
//     title: "No Hay Imagen Disponible", 
//     url: ""
// };

/**
 * Tarea
 *
 * 1. Añadir PropTypes
 *  a. Title Obligatorio
 *  b. url obligatorio
 *
 * 2. Evaluar el snapshot
 */
