import React from "react";

export default function DiamondPrice() {
  const col = (title, additionalClasses = "") => {
    return (
      <th
        scope="col"
        className={`text-xs text-black font-medium px-6 py-3 text-left uppercase tracking-wider ${additionalClasses}`}
      >
        {title}
      </th>
    );
  };

  const row = (data, additionalClasses = "") => {
    return (
      <td
        className={`text-sm text-black px-6 py-4 whitespace-nowrap ${additionalClasses}`}
      >
        {data}
      </td>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 min-w-full flex justify-center items-center sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md shadow-green-300 sm:rounded-lg">
            <table className="min-w-full table-auto border border-green-700">
              {/* Cols */}
              <thead className="bg-green-200">
                <tr>
                  {col("Parameters", "bg-green-200")} {col("IF")}
                  {col("VVS1")}
                  {col("VVS2")}
                  {col("VS1")}
                  {col("VS2")}
                </tr>
              </thead>
              <tbody>
                {/* Row1 */}
                <tr className="bg-green-50 border-b">
                  {row("Parameter 1", "bg-green-200")} {row("Data 1")}
                  {row("Data 2")}
                  {row("Data 3")}
                  {row("Data 4")}
                  {row("Data 5")}
                </tr>
                {/* Row2 */}
                <tr className="bg-green-50 border-b">
                  {row("Parameter 2", "bg-green-200")} {row("Data 6")}
                  {row("Data 7")}
                  {row("Data 8")}
                  {row("Data 9")}
                  {row("Data 10")}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
