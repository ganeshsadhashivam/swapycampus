// app/(admin)/layout.tsx
import Sidebar from "../../components/Sidebar";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 p-8">
        {/* <div className="grid grid-cols-3 gap-6 mb-8">
          
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
        </div> */}

        {/* Main Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
