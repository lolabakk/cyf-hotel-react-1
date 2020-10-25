import React from "react";

function Footer() {
  const footerBody = [
    "123 Fake Street London",
    "E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer>
      <ul className=" footer-list">
        {footerBody.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </footer>
  );
}

export default Footer;
