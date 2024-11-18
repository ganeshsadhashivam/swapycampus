// components/Table.tsx
const Table = ({ data }: { data: any[] }) => {
  return (
    <table className="min-w-full table-auto">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="py-2 px-4">Column 1</th>
          <th className="py-2 px-4">Column 2</th>
          <th className="py-2 px-4">Column 3</th>
          <th className="py-2 px-4">Column 4</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="bg-white border-b">
            <td className="py-2 px-4">{row.column1}</td>
            <td className="py-2 px-4">{row.column2}</td>
            <td className="py-2 px-4">{row.column3}</td>
            <td className="py-2 px-4">{row.column4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
