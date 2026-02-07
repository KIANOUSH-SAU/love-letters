import { useUser } from "../../contexts/auth-context";
import NotebookTextArea from "../../components/NoteBookTextArea";
import NotebookPage from "../../components/NoteBookPage";
import { useState } from "react";
import { Navbar } from "../../navbar/Navbar";

const HomeScreen = () => {
  const { activeUser } = useUser();
  const [letter, setLetter] = useState<string>("");

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="container">
          <NotebookPage showLines={true}>
            <NotebookTextArea
              value={letter}
              onChange={(e) => setLetter(e.target.value)}
              placeholder="Write your love letter here..."
              rows={12}
            />
          </NotebookPage>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
