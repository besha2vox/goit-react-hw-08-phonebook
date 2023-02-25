import { TitleLayout } from './Title.styled';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <TitleLayout>{title}</TitleLayout>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
