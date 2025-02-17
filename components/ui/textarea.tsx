import * as React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type TextareaProps = {
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
  id?: string;
  className?: string;
};

const Textarea: React.FC<TextareaProps> = (props) => {
  return <ReactQuill {...props} />;
};

export { Textarea };
