import PropTypes from 'prop-types';

const Counter = ({counter}) => {
  return (
    <div>
        Compteur: {counter}
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.number
};

export default Counter;