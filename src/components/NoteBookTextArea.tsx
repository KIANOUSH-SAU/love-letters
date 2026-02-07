import { forwardRef, TextareaHTMLAttributes } from "react";

interface NotebookTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  handwritingFont?: boolean;
}

const NotebookTextArea = forwardRef<HTMLTextAreaElement, NotebookTextAreaProps>(
  ({ handwritingFont = false, className = "", ...props }) => {
    return (
      <textarea
        className={`w-full bg-transparent resize-none outline-none text-primary leading-8 ${
          handwritingFont ? "font-handwriting" : "font-normal"
        } ${className}`}
        style={{
          fontFamily: "Caveat, cursive",
          lineHeight: "32px", // Matches the line spacing
          paddingTop: "4px",
        }}
        {...props}
      />
    );
  },
);

NotebookTextArea.displayName = "NotebookTextArea";

export default NotebookTextArea;
