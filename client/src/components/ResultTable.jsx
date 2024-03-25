import React from "react";

export const ResultTable = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Attempts</th>
            <th className="border border-gray-300 px-4 py-2">Earn Points</th>
            <th className="border border-gray-300 px-4 py-2">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">John</td>
            <td className="border border-gray-300 px-4 py-2">5</td>
            <td className="border border-gray-300 px-4 py-2">10</td>
            <td className="border border-gray-300 px-4 py-2">Pass</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
