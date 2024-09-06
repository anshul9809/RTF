// src/components/EditorToolbar.js
import React from "react";

function Toolbar() {
  return (
    <div id="toolbar">
      <span className="ql-formats">
        <button className="ql-header" value="1" title="Heading 1">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 3h2v8h8V3h2v18h-2v-8H5v8H3V3zm18 0v2h-6v2h4v2h-4v2h6v2h-8V3h8z" />
          </svg>
        </button>
        <button className="ql-header" value="2" title="Heading 2">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 3h2v8h8V3h2v18h-2v-8H5v8H3V3zm18 6v2h-4c0 1.1.9 2 2 2h2v6h-6v-2h4v-2h-2c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4v2h-4z" />
          </svg>
        </button>
      </span>
      <span className="ql-formats">
        <button className="ql-bold" title="Bold">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.6 10.79c1.12-.82 1.84-2.15 1.84-3.64 0-2.49-2.02-4.5-4.5-4.5H7v18h6.8c2.42 0 4.4-1.93 4.4-4.31 0-1.98-1.44-3.65-3.33-4.05zM10 5h3.5c.83 0 1.5.67 1.5 1.5S14.33 8 13.5 8H10V5zm4 12H10v-3h4c.83 0 1.5.67 1.5 1.5S14.83 17 14 17z" />
          </svg>
        </button>
        <button className="ql-italic" title="Italic">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 4v3h2.21l-3.42 10H6v3h8v-3h-2.21l3.42-10H18V4z" />
          </svg>
        </button>
        <button className="ql-underline" title="Underline">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17c3.31 0 6-2.69 6-6V3h-2v8c0 2.21-1.79 4-4 4s-4-1.79-4-4V3H6v8c0 3.31 2.69 6 6 6zm-6 2v2h12v-2H6z" />
          </svg>
        </button>
      </span>
      <span className="ql-formats">
        <button className="ql-image" title="Add Image">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-11-7l2.03 2.71 2.71-3.63L19 18H5l5-6zm1-3.5c0 .83-.67 1.5-1.5 1.5S8 9.33 8 8.5 8.67 7 9.5 7s1.5.67 1.5 1.5z" />
          </svg>
        </button>
      </span>
    </div>
  );
}

export default Toolbar;
