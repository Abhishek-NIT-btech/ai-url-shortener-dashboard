import { useState } from "react";

interface UrlFormProps {
  onSuccess: () => void;
}

const UrlForm = ({ onSuccess }: UrlFormProps) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!url.trim()) {
      alert("Please enter a URL");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          originalUrl: url,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Short URL created successfully!");

        setUrl("");

        // Refresh Dashboard
        onSuccess();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Create Short URL
      </h2>

      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full border rounded px-4 py-3 mb-4"
      />

      <button
        onClick={handleShorten}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Creating..." : "Shorten URL"}
      </button>
    </div>
  );
};

export default UrlForm;