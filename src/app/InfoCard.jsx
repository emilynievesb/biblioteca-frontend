import React from 'react';

export default function InfoCard({ title, Icon, children }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Icon className="mr-2 text-blue-600" />
                {title}
            </h2>
            <div className="text-gray-700">{children}</div>
        </div>
    );
}
