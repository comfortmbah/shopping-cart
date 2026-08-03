import PropTypes from 'prop-types'

const Card = ({ children, className = "", hover = true, }) => {
  const baseStyles = "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm";
  const hoverStyles = hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" : "";

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
};

export default Card