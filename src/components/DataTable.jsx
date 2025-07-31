import { useState } from 'react';

function downloadCSV(rows) {
  const headers = Object.keys(rows[0]);
  const csv = [headers.join(',')]
    .concat(rows.map(row => headers.map(h => row[h]).join(',')))
    .join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.csv';
  a.click();
  URL.revokeObjectURL(url);
}

export function DataTable({ rows }) {
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Filter logic
  const filteredRows = rows.filter(row => {
    const matchesName = row.name.toLowerCase().includes(filter.toLowerCase());
    const matchesStatus =
      statusFilter === 'All' || row.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesName && matchesStatus;
  });

  const paginatedRows = filteredRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 w-full">
      <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white">User Table</h2>
        <div className="flex gap-2 flex-wrap">
          <input
            className="border p-1 rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Search by name"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
          />
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="border p-1 rounded dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button
            onClick={() => downloadCSV(filteredRows)}
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            Export CSV
          </button>
        </div>
      </div>

      <table className="min-w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-left">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedRows.length > 0 ? (
            paginatedRows.map((row, index) => (
              <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.email}</td>
                <td className="px-4 py-2">{row.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="px-4 py-4 text-center text-gray-500 dark:text-gray-400">
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end space-x-2 mt-2">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentPage(p => p + 1)}
          disabled={currentPage * rowsPerPage >= filteredRows.length}
          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
