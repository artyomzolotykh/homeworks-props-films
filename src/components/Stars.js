import PropTypes from 'prop-types';
import Star from './Star';

const Stars = ({count}) => {
  if (count <= 5 && count > 0) {
    return (
      <ul className="card-body-stars u-clearfix">
        {[...Array(count)].map((e, i) => <Star key={i} />)}
      </ul>
    )
  } else {
    return null;
  }
};

Stars.defaultProps = {
  count: 0
};

Stars.propTypes = {
  count: PropTypes.number
}

export default Stars;