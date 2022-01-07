import React from "react";
import { TitleSection } from "../TitleSection/TitleSection";
import { ContactItem } from "./ContactItem";

export const ContactsList = ({ contacts, title }) => {
  return (
    <>
      <TitleSection title={title} />
      <ul>
        {contacts.length === 0
          ? "Такого контакта нету"
          : contacts.map((item) => (
              <ContactItem key={item.id}>
                {item.name}: {item.number}
              </ContactItem>
            ))}
      </ul>
    </>
  );
};
