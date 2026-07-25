import type { UrlData } from "../pages/Dashboard";

interface UrlTableProps {
  urls: UrlData[];
  onDeleteSuccess: () => void;
}

const UrlTable = ({
  urls,
  onDeleteSuccess,
}: UrlTableProps) => {
  const copyToClipboard = async (shortCode: string) => {
    const shortUrl = `http://localhost:3001/${shortCode}`;

    try {
      await navigator.clipboard.writeText(shortUrl);
      alert("Short URL copied!");
    } catch (error) {
      console.error(error);
      alert("Failed to copy URL");
    }
  };

  const editUrl = async (
    id: string,
    currentUrl: string
  ) => {
    const newUrl = window.prompt(
      "Enter the new URL",
      currentUrl
    );

    if (!newUrl) return;

    try {
      const response = await fetch(
        `http://localhost:3001/api/urls/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            originalUrl: newUrl,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        onDeleteSuccess();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUrl = async (id: string) => {
    const confirmed = window.confirm(
      "Delete this URL?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `http://localhost:3001/api/urls/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        onDeleteSuccess();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6">
        AI URL Dashboard
      </h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left px-4 py-3">Title</th>
            <th className="text-left px-4 py-3">
              Category
            </th>
            <th className="text-left px-4 py-3">
              Original URL
            </th>
            <th className="text-left px-4 py-3">
              Short URL
            </th>
            <th className="text-left px-4 py-3">
              Clicks
            </th>
            <th className="text-left px-4 py-3">
              AI Summary
            </th>
            <th className="text-left px-4 py-3">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {urls.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="text-center py-8 text-gray-500"
              >
                No URLs Found
              </td>
            </tr>
          ) : (
            urls.map((url) => (
              <tr
                key={url.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-4 py-4 font-semibold">
                  {url.title ?? "-"}
                </td>

                <td className="px-4 py-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {url.category ?? "-"}
                  </span>
                </td>

                <td className="px-4 py-4 break-all">
                  {url.originalUrl}
                </td>

                <td className="px-4 py-4">
                  <a
                    href={`http://localhost:3001/${url.shortCode}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline font-mono"
                  >
                    {url.shortCode}
                  </a>
                </td>

                <td className="px-4 py-4">
                  {url.clicks}
                </td>

                <td className="px-4 py-4 max-w-xs">
                  {url.summary ?? "-"}
                </td>

                <td className="px-4 py-4">
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() =>
                        editUrl(
                          url.id,
                          url.originalUrl
                        )
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      ✏️
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard(
                          url.shortCode
                        )
                      }
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                    >
                      📋
                    </button>

                    <button
                      onClick={() =>
                        deleteUrl(url.id)
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      🗑
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UrlTable;