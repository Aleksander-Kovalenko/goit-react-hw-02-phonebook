import propTypes from "prop-types";

export const ContactItem = ({ children, id, onDeleteContact }) => {
  return (
    <li>
      {children}
      <button onClick={() => onDeleteContact(id)}>Удалить</button>
    </li>
  );
};

ContactItem.propTypes = {
  id: propTypes.string.isRequired,
};
