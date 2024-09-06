import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 
import Toolbar from "./Toolbar";
import { generatePdfWithJsPDF } from "../utils/pdfUtils";
import "../styles/Editor.css"; 

const modules = {
  toolbar: {
    container: "#toolbar",
  }
};

const formats = [
  "header", "bold", "italic", "underline", "list", "bullet", "image",
];

function TextEditor() {
  const [editorContent, setEditorContent] = useState("");
  const editorRef = useRef(null);

  const handleSaveAsPDF = () => {
    const editorHtml = editorRef.current.editor.root.innerHTML;
    generatePdfWithJsPDF(editorHtml);
  };

  return (
    <div className="editor-container">
      <Toolbar />
      <ReactQuill className="editor"
        ref={editorRef}
        value={editorContent}
        onChange={setEditorContent}
        modules={modules}
        formats={formats}
        placeholder="Write something here..."
      />
      <button className="save-btn" onClick={handleSaveAsPDF}>
        Save and Download PDF
      </button>
    </div>
  );
}

export default TextEditor;
