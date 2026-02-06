import { useState, useRef } from "react";

const KeypadDemo = () => {
  const [input, setInput] = useState<string>("");
  const [keyboardKey, setKeyboardKey] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (key: string) => {
    setInput((prevInput) => {
      if (prevInput.length < 8) {
        return prevInput + key;
      }
      return prevInput;
    });
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const keys = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "⌫"],
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      {/* Input Display */}
      <div className="w-full max-w-xs">
        <input
          ref={inputRef}
          type="text"
          value={input}
          placeholder="Enter PIN"
          className="w-full border-2 border-primary/30 rounded-lg px-6 py-4 text-center text-2xl font-semibold bg-white/80 text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          onKeyDown={(keyboardKey) => {
            if (keyboardKey.key !== "Meta") {
              setKeyboardKey(keyboardKey.key);
              console.log(keyboardKey.key);
              if (keyboardKey.key === "Backspace") {
                handleBackspace();
              }
            }
          }}
        />
      </div>

      {/* Keypad Grid - 4 rows x 3 columns */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
        {keys.flat().map((key, index) => (
          <button
            key={index}
            onClick={(e) => {
              if (key === "⌫") {
                handleBackspace();
              } else {
                handleKeyPress(key);
              }
              e.currentTarget.blur();
              inputRef.current?.focus();
            }}
            className="bg-primary hover:bg-primary/90 active:scale-95 text-white font-bold text-2xl rounded-xl py-6 transition-all duration-150 shadow-md hover:shadow-lg"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeypadDemo;
