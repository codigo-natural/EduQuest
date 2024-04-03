import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

export const ResultTable = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
      setData(res)
    })
  }, [])
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
        {
          data.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="4"><h3>No Data Found</h3></td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{item?.username || ''}</td>
                  <td className="border border-gray-300 px-4 py-2">{item?.attempts || 0}</td>
                  <td className="border border-gray-300 px-4 py-2">{item?.points || 0}</td>
                  <td className="border border-gray-300 px-4 py-2">{item?.achived || ""}</td>
                </tr>
              ))}
            </tbody>
          )
        }

      </table>
    </div>
  );
};
