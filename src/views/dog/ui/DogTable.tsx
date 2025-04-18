import React from "react";

interface Dog {
  name: string;
  photo?: string;
  owner: {
    name: string;
    email: string;
    photo?: string;
  };
  details: string;
}

interface DogTableProps {
  dogs: Dog[];
}

const DogTable: React.FC<DogTableProps> = ({ dogs }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">이름</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">주인</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">세부 상태</th>
            <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">액션</th>
          </tr>
        </thead>
        <tbody>
          {dogs.map((dog, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">
                <div className="flex items-center">
                  {dog.photo ? (
                    <img src={dog.photo} alt={dog.name} className="w-10 h-10 rounded-full mr-4" />
                  ) : (
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                  )}
                  <div>
                    <p className="font-medium">{dog.name}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                <div className="flex items-center">
                  {dog.owner.photo ? (
                    <img
                      src={dog.owner.photo}
                      alt={dog.owner.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                  )}
                  <div>
                    <p className="font-medium">{dog.owner.name}</p>
                    <p className="text-gray-500 text-xs">{dog.owner.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{dog.details}</td>
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

export default DogTable;
