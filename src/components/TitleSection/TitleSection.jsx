import propTypes from "prop-types";

export const TitleSection = ({ title }) => <h3>{title}</h3>;

TitleSection.propTypes = {
  title: propTypes.string.isRequired,
};
