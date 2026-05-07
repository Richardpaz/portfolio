import React from "react";
interface Props {
  firstName: string;
}

export function EmailTemplate({ firstName }: Props) {
  return (
    <div>
      <h1>Hola {firstName}</h1>
      <p>Te llegó un nuevo mensaje desde tu portfolio 🚀</p>
    </div>
  );
}