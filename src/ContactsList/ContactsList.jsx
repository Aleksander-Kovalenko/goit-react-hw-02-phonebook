import { ContactItem } from "./ContactItem";
export const ContactsList = ({ value }) => {
  console.log(value);
  return (
    <ul>
      {/* <ContactItem>{value}</ContactItem> */}
      {/* {value.map((item) => (
        <ContactItem>{item}</ContactItem>
      ))} */}
      {/* <ContactItem events={value} /> */}
      {/* {events.map((item) => (
        <ContactItem text={item} />
      ))} */}
    </ul>
  );
};
