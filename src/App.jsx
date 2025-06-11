import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username) return;

    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();
      setUserData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false); // 🔴 Stop loader
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-12 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        GitHub User Finder
      </h1>

      <div className="w-full max-w-md flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition"
        >
          Search
        </button>
      </div>
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}

      {error && <p className="mt-6 text-red-600 font-medium">{error}</p>}

      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
