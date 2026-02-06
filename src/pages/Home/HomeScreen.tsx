import { useUser } from "../../contexts/auth-context";

const HomeScreen = () => {
  const { activeUser } = useUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">
        Welcome, {activeUser?.name || "Sweetheart"}! 💖
      </h1>
      <p className="text-lg text-pink-400">
        You've successfully entered the PIN.
      </p>
    </div>
  );
};

export default HomeScreen;
