import React from "react";

const AboutInfo = ({ about }) => {
  const { id, info } = about;
  return (
    <li className="text-xl font-semibold">
      {id} . {info}
    </li>
  );
};

export default AboutInfo;
