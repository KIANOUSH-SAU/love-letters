import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as Tone from "tone";
import { useUser } from "../contexts/auth-context";

const noteMap: Record<string, string> = {
  "1": "E6", // The iconic high "ding" note (repeated 15x)
  "2": "E5", // The octave drop
  "3": "D#6", // The second set of hits
  "4": "D#5", // Dropping an octave
  "5": "C#6", // Third set
  "6": "C#5", // Dropping an octave
  "7": "B5", // The transition note
  "8": "A5", // The resolution note
  "9": "G#5", // The final melancholic note
  "0": "F#5", // Extra lower note
  "*": "E4", // Deep bass note
  "⌫": "C#4", // Alternative bass note
};
const KeypadDemo = () => {
  const navigate = useNavigate();
  const { users, setActiveUser } = useUser();
  const [input, setInput] = useState<string>("");
  const [keyboardKey, setKeyboardKey] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const synth = new Tone.Synth({
    oscillator: { type: "sine" }, // Sines are cleaner for high notes
    envelope: {
      attack: 0.005,
      decay: 0.7,
      sustain: 1,
      release: 1,
    },
  }).toDestination();

  const handleKeyPress = (key: string) => {
    const note = noteMap[key] || "C4";
    synth.triggerAttackRelease(note, "8n");
    const nextInput = input.length < 8 ? input + key : input;
    setInput(nextInput);

    const foundUser = users.find((u) => u.pin === nextInput);
    if (foundUser) {
      setActiveUser(foundUser);
      navigate("/home");
    }
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
