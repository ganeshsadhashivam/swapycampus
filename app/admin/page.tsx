// app/(admin)/page.tsx
const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div>
        {/* You can display a table component here */}
        <p>Welcome to the admin dashboard.</p>
        <div className="flex-1 p-8">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Card 1</h3>
              <p className="text-gray-700">Content for card 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Card 2</h3>
              <p className="text-gray-700">Content for card 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Card 3</h3>
              <p className="text-gray-700">Content for card 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
