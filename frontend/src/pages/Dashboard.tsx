import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import UrlForm from "../components/UrlForm";
import UrlTable from "../components/UrlTable";

export interface UrlData {
  id: string;
  originalUrl: string;
  shortCode: string;
  clicks: number;
  title: string | null;
  category: string | null;
  summary: string | null;
}

const Dashboard = () => {
  const [urls, setUrls] = useState<UrlData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadUrls = async () => {
    console.log("Loading URLs...");

    try {
      const response = await fetch("http://localhost:3001/api/urls");

      console.log("Status:", response.status);

      const data = await response.json();

      console.log("Received:", data);

      if (data.success) {
        console.log("Updating state...");
        setUrls(data.data);
      }
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  useEffect(() => {
    loadUrls();
  }, []);

  const totalUrls = urls.length;

  const totalClicks = urls.reduce(
    (sum, url) => sum + url.clicks,
    0
  );

  const averageClicks =
    totalUrls === 0
      ? "0"
      : (totalClicks / totalUrls).toFixed(1);

  const filteredUrls = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    if (!term) return urls;

    return urls.filter(
      (url) =>
        url.originalUrl.toLowerCase().includes(term) ||
        url.shortCode.toLowerCase().includes(term) ||
        (url.title ?? "").toLowerCase().includes(term) ||
        (url.category ?? "").toLowerCase().includes(term)
    );
  }, [urls, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total URLs"
            value={totalUrls.toString()}
          />

          <StatsCard
            title="Total Clicks"
            value={totalClicks.toString()}
          />

          <StatsCard
            title="Average Clicks"
            value={averageClicks}
          />
        </div>

        <div className="mb-8">
          <UrlForm onSuccess={loadUrls} />
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search by URL, Short Code, Title or Category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <UrlTable
          urls={filteredUrls}
          onDeleteSuccess={loadUrls}
        />
      </main>
    </div>
  );
};

export default Dashboard;