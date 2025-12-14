import React, { useState } from 'react';
// สมมติว่านี่คือข้อมูลจำลองจาก Backend (MERN)
const mockUserData = {
  name: 'Khun User',
  tasksDueToday: 7,
  tasksCompletedToday: 3,
  overdueTasks: 1,
};

const mockLists = [
  { id: 1, name: '🎯 งานวันนี้ (Focus)', count: 7, color: 'text-red-500' },
  { id: 2, name: '🏋️ ฟิตเนส & สุขภาพ', count: 5, color: 'text-green-500' },
  { id: 3, name: '📚 โปรเจกต์ MERN', count: 12, color: 'text-indigo-500' },
  { id: 4, name: '💡 ไอเดียใหม่ๆ', count: 3, color: 'text-gray-500' },
];

const mockDailyStats = [
  { list: 'โปรเจกต์ MERN', completed: 6, total: 12 },
  { list: 'งานวันนี้ (Focus)', completed: 3, total: 7 },
];

// --- Sub-Components (เพื่อความกระชับ) ---

// 1. Sidebar Component (จำลอง)
const Sidebar = ({ lists }) => (
  <div className="hidden lg:block w-64 p-6 border-r border-gray-200 bg-white sticky top-0 h-screen overflow-y-auto">
    <div className="flex items-center mb-6">
      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">KU</div>
      <span className="ml-3 font-semibold text-gray-800 text-lg">{mockUserData.name}</span>
    </div>
    <div className="mb-8">
      <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Workspace</h3>
      <div className="space-y-1">
        <a href="#" className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150">
          <span className="text-2xl mr-2">🏠</span> Home
        </a>
        <a href="#" className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150">
          <span className="text-2xl mr-2">⚙️</span> Settings
        </a>
      </div>
    </div>
    <div>
      <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2 flex justify-between items-center">
        MY LISTS
        <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md text-xl leading-none" title="Create New List">+</button>
      </h3>
      <ul className="space-y-1">
        {lists.map(list => (
          <li key={list.id} className="group flex items-center justify-between p-2 rounded-lg text-gray-800 hover:bg-indigo-50 transition duration-150 cursor-pointer">
            <div className="flex items-center truncate">
                <span className={`text-xl mr-2 ${list.color}`}>•</span>
                <span className="truncate">{list.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-400 group-hover:text-indigo-600 transition">{list.count}</span>
          </li>
        ))}
        <li className="flex items-center p-2 rounded-lg text-indigo-600 hover:bg-indigo-50 transition duration-150 cursor-pointer">
            <span className="text-2xl mr-2">+</span>
            <span>Create New List</span>
        </li>
      </ul>
    </div>
  </div>
);

// 2. Summary Card Component
const SummaryCard = ({ title, value, icon, bgColor, textColor }) => (
  <div className={`p-5 rounded-xl ${bgColor} shadow-md border border-gray-200`}>
    <div className={`text-4xl mb-2 ${textColor}`}>{icon}</div>
    <p className="text-sm font-medium text-gray-500 uppercase">{title}</p>
    <h2 className="text-3xl font-bold text-gray-800 mt-1">{value}</h2>
  </div>
);

// 3. Quick Action Component
const QuickAction = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out border border-gray-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    <span className="text-3xl mr-3">{icon}</span>
    <span className="font-semibold text-gray-700 text-lg hidden sm:inline">{label}</span>
  </button>
);

// 4. Daily Stats Card (Notion Vibe)
const DailyStatsCard = ({ stats }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">✨ Daily Statistics</h3>
    <p className="text-gray-500 mb-6">สรุปผลงานที่ทำสำเร็จไปแล้ววันนี้</p>
    
    <div className="space-y-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-3 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center text-sm font-medium mb-1">
            <span className="text-gray-700">{stat.list}</span>
            <span className="text-indigo-600">{stat.completed} / {stat.total}</span>
          </div>
          {/* Progress Bar (Minimal) */}
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-indigo-400 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(stat.completed / stat.total) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-6 text-center pt-4 border-t border-gray-100">
        <a href="#" className="text-sm font-medium text-indigo-500 hover:text-indigo-700 transition">
            ดูประวัติวันก่อนหน้า →
        </a>
    </div>
  </div>
);


// --- Main App Component ---

function Home() {
  // สถานะสำหรับ Dark Mode (ตาม Requirement เสริม)
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // ใช้คลาส "dark" ที่ Root element
  const themeClass = isDarkMode ? 'dark' : '';

  // Data สำหรับ Highlight Tasks
  const highPriorityTasks = [
    { id: 101, text: 'ประชุมสรุป MERN Stack', deadline: 'Today, 2 PM', priority: 'High' },
    { id: 102, text: 'ส่งมอบ Wireframe Checklist', deadline: 'Tomorrow', priority: 'Medium' },
  ];

  return (
    // Container หลัก พร้อม Dark Mode (ถ้าเปิด)
    <div className={`flex min-h-screen bg-gray-100 ${themeClass}`}>
      
      {/* 1. Sidebar (List Management) */}
      <Sidebar lists={mockLists} />

      {/* 2. Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10">
        
        <header className="flex justify-between items-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                👋 Welcome Back, {mockUserData.name}!
            </h1>
            <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-3 rounded-full text-gray-500 hover:bg-gray-200 transition"
                title="Toggle Dark Mode"
            >
                {isDarkMode ? '🌞' : '🌙'}
            </button>
        </header>


        {/* A. Quick Actions (สร้าง List/Task เร็ว) */}
        <section className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <QuickAction 
                icon="📝" 
                label="Create New Task" 
                onClick={() => console.log('Open New Task Modal')}
            />
            <QuickAction 
                icon="📂" 
                label="Create New List" 
                onClick={() => console.log('Open New List Modal')}
            />
            <QuickAction 
                icon="🔎" 
                label="Search Tasks" 
                onClick={() => console.log('Open Search')}
            />
        </section>


        {/* B. Summary/Statistics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          
          {/* Summary Cards */}
          <SummaryCard
            title="Tasks Due Today"
            value={mockUserData.tasksDueToday}
            icon="🚨"
            bgColor="bg-white"
            textColor="text-red-500"
          />
          <SummaryCard
            title="Completed Today"
            value={mockUserData.tasksCompletedToday}
            icon="✅"
            bgColor="bg-white"
            textColor="text-green-500"
          />
          <SummaryCard
            title="Overdue Tasks"
            value={mockUserData.overdueTasks}
            icon="⏰"
            bgColor="bg-white"
            textColor="text-yellow-500"
          />

          {/* Daily Stats Card */}
          <div className="md:col-span-2 xl:col-span-3">
             <DailyStatsCard stats={mockDailyStats} />
          </div>

        </section>


        {/* C. Highlighted/Important Tasks */}
        <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                🔥 Important & Urgent
                <span className="ml-2 text-sm font-medium bg-red-100 text-red-600 px-3 py-1 rounded-full">
                    {highPriorityTasks.length} Tasks
                </span>
            </h2>

            <div className="space-y-3">
                {highPriorityTasks.map(task => (
                    <div 
                        key={task.id} 
                        className="flex items-center p-4 bg-white border-l-4 border-red-500 rounded-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer"
                    >
                        <span className="text-xl mr-4 text-gray-500">
                            {task.priority === 'High' ? '❗️' : '⚠️'}
                        </span>
                        <div className="flex-1">
                            <p className="font-semibold text-gray-800">{task.text}</p>
                            <p className="text-sm text-gray-500 mt-1">
                                <span className="mr-2">Due: **{task.deadline}**</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${task.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                    {task.priority}
                                </span>
                            </p>
                        </div>
                        <button className="text-gray-400 hover:text-indigo-600 ml-4">
                            <span className="text-2xl leading-none">→</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>

      </main>
    </div>
  );
}

export default Home;