import React from "react";

export default function Alert() {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div class="alert alert-success w-25 p-3" role="alert">
        Success! You added your item!
      </div>
    </div>
  );
}
