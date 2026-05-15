import React from 'react'

export const Table = ({
  columns,
  data,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full" {...props}>
        <thead>
          <tr className="border-b border-slate-700">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-300"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors">
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3 text-sm text-gray-400">
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
