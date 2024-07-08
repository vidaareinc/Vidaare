import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between items-center p-8">
      <h6>&copy; All right reserved .Vidaare</h6>
      <div className="flex-row flex gap-2">
        <h6>Terms and conditions |</h6>
        <h6>Privacy</h6>
      </div>
    </div>
  );
}
