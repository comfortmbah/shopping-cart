import PropTypes from 'prop-types'

const Input = ({ type="text", placeholder="", value, onChange, className="", ...props}) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition-all
        duration-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 ${className}`}
      {...props}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Input