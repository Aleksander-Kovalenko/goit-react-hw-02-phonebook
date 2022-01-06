import React from "react";
import { ContactItem } from "./ContactItem";

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((item) => (
        <ContactItem key={item.id}>
          {item.name}: {item.number}
        </ContactItem>
      ))}
    </ul>
  );
};
