import React from "react";

interface User {
  name: string;
  email: string;
  status: string;
  role: string;
}

interface TableProps {
  users: User[];
}

const UserTable: React.FC<TableProps> = ({ users }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">이름</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">상태</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">역할</th>
            <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">액션</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4 text-sm text-gray-900">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p>{user.name}</p>
                    <p className="text-gray-500 text-xs">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm">
                <span
                  className={`px-3 py-1 rounded-full text-white text-xs ${
                    user.status === "활성화" ? "bg-success" : "bg-danger"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{user.role}</td>
              <td className="px-6 py-4 text-right space-x-2">
                <button className="text-yellow-500 border border-yellow-500 px-3 py-1 rounded-full text-sm hover:bg-yellow-500 hover:text-white transition">
                  비활성화
                </button>
                <button className="text-red-500 border border-red-500 px-3 py-1 rounded-full text-sm hover:bg-red-500 hover:text-white transition">
                  삭제
                </button>
                <button className="text-blue-500 border border-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white transition">
                  수정
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
