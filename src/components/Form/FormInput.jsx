export const FormInput = () => {
  return (
    <label htmlFor="">
      <span className="label-form">Number</span>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={this.handleNumber}
        // value={number}
      />
    </label>
  );
};
