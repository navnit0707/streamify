import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <li style={{ flexGrow: 1 }}>Logo</li>
        <li style={{ flexGrow: 3, justifyContent: "flex-end" }}>
          <div>
            <input styl type="text"></input>
            <IoSearchSharp />
          </div>
        </li>
        <li style={{ flexGrow: 1 }}> User icon </li>
      </ul>
    </nav>
  );
}
