import React, { useState, useMemo } from 'react';

// ----------------------------------------------------
// --- MOCK & INITIAL DATA ---
// ----------------------------------------------------

const mockUserData = {
    name: 'Khun User',
};

// ข้อมูล Task List เริ่มต้น
const initialLists = [
    { 
        id: 1, 
        name: '🎯 งานวันนี้ (Focus)', 
        color: 'text-red-500',
        tasks: [
            { id: 101, text: 'ตรวจสอบโค้ดหน้า Sign Up', completed: false, overdue: true },
            { id: 102, text: 'จัดทำ Demo ระบบ To-do List', completed: false, overdue: false },
        ]
    },
    { 
        id: 2, 
        name: '📚 โปรเจกต์ MERN', 
        color: 'text-indigo-500',
        tasks: [
            { id: 201, text: 'ประชุมทีมสำหรับโปรเจกต์ Checklist', completed: false, overdue: false },
            { id: 202, text: 'ออกแบบ API สำหรับ Task Creation', completed: true, overdue: false },
        ]
    },
];

// ----------------------------------------------------
// --- SUB-COMPONENTS (ปรับปรุง Dashboard Link) ---
// ----------------------------------------------------

// [Summary Card Component]
const SummaryCard = ({ title, value, icon, bgColor, textColor }) => (
    <div className={`p-5 rounded-xl ${bgColor} shadow-md border border-gray-200`}>
        <div className={`text-4xl mb-2 ${textColor}`}>{icon}</div>
        <p className="text-sm font-medium text-gray-500 uppercase">{title}</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-1">{value}</h2>
    </div>
);


// [Sidebar Component]
const Sidebar = ({ lists, userName, onSelectList, currentListId }) => {
    // กำหนดว่า Dashboard Link ถูกเลือกหรือไม่
    const isDashboardSelected = currentListId === 'dashboard';

    return (
        <div className="hidden lg:block w-64 p-6 border-r border-gray-200 bg-white sticky top-0 h-screen overflow-y-auto">
            <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">KU</div>
                <span className="ml-3 font-semibold text-gray-800 text-lg">{userName}</span>
            </div>
            
            <div className="mb-8">
                <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">Workspace</h3>
                <div className="space-y-1">
                    {/* 🆕 Dashboard Link: ใช้ ID 'dashboard' */}
                    <a 
                        href="#" 
                        onClick={() => onSelectList('dashboard')} 
                        className={`flex items-center p-2 rounded-lg font-medium transition duration-150 cursor-pointer 
                            ${isDashboardSelected ? 'text-indigo-600 bg-indigo-50' : 'text-gray-800 hover:bg-indigo-50'}`}
                    >
                        <span className="text-xl mr-2">🏠</span> Dashboard
                    </a>
                </div>
            </div>
            
            <div>
                <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2 flex justify-between items-center">
                    MY LISTS
                    <button 
                        onClick={() => onSelectList(null)} // null เพื่อเปิด Modal สร้าง List
                        className="text-gray-400 hover:text-gray-600 p-1 rounded-md text-xl leading-none" 
                        title="Create New List"
                    >+</button>
                </h3>
                <ul className="space-y-1">
                    {lists.map(list => {
                        const isSelected = list.id === currentListId;
                        return (
                            <li 
                                key={list.id} 
                                onClick={() => onSelectList(list.id)}
                                className={`group flex items-center justify-between p-2 rounded-lg text-gray-800 transition duration-150 cursor-pointer 
                                    ${isSelected ? 'bg-indigo-100 text-indigo-800 font-semibold' : 'hover:bg-indigo-50'}`}
                            >
                                <div className="flex items-center truncate">
                                    <span className={`text-xl mr-2 ${list.color}`}>•</span>
                                    <span className="truncate">{list.name}</span>
                                </div>
                                <span className={`text-sm font-bold transition ${isSelected ? 'text-indigo-800' : 'text-gray-400 group-hover:text-indigo-600'}`}>
                                    {list.tasks.filter(t => !t.completed).length}
                                </span>
                            </li>
                        )})}
                </ul>
            </div>
        </div>
    );
};


// [Task Item Component] (ไม่มีการเปลี่ยนแปลง)
const TaskItem = ({ listId, task, onToggle, onDelete }) => (
    <div
        className={`flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200 cursor-pointer border ${task.completed ? 'border-green-300 bg-green-50' : 'border-gray-200'}`}
    >
        <button 
            onClick={(e) => { e.stopPropagation(); onToggle(listId, task.id); }}
            className={`w-6 h-6 mr-4 flex items-center justify-center rounded-full border-2 transition ${task.completed ? 'bg-green-500 border-green-500 text-white' : 'border-gray-400 hover:bg-gray-100'}`}
        >
            {task.completed && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            )}
        </button>
        <div className="flex-1">
            <p className={`font-medium text-lg ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                {task.text}
            </p>
        </div>
        <button 
            onClick={(e) => { e.stopPropagation(); onDelete(listId, task.id); }}
            className="text-gray-400 hover:text-red-500 ml-4 p-1 rounded-full transition"
            title="Delete Task"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
    </div>
);

// [Add Task Form] (ไม่มีการเปลี่ยนแปลง)
const AddTaskForm = ({ currentListId, onAddTask }) => {
    const [taskText, setTaskText] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim()) {
            onAddTask(currentListId, taskText.trim());
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex space-x-3 bg-white p-4 rounded-xl shadow-md border border-gray-200">
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="เพิ่มงานใหม่..."
                    className="flex-1 px-2 py-1 border-none focus:ring-0 focus:outline-none text-gray-800 text-lg"
                />
                <button
                    type="submit"
                    className="flex items-center px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-150 focus:ring-2 focus:ring-pink-500"
                >
                    + Add Task
                </button>
            </div>
        </form>
    );
};

// [Add/Create List Modal] (ไม่มีการเปลี่ยนแปลง)
const AddListModal = ({ isVisible, onClose, onAddList }) => {
    const [listName, setListName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (listName.trim()) {
            onAddList(listName.trim());
            setListName('');
            onClose();
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📂 สร้าง List ใหม่</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="listName" className="block text-sm font-medium text-gray-700">
                            ชื่อ List
                        </label>
                        <input
                            id="listName"
                            type="text"
                            value={listName}
                            onChange={(e) => setListName(e.target.value)}
                            placeholder="เช่น โครงการส่วนตัว, งานลูกค้า"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                            ยกเลิก
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                        >
                            สร้าง
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


// ----------------------------------------------------
// --- 🔄 Main App Component (ปรับปรุง Data Logic) ---
// ----------------------------------------------------

function AppDashboard() {
    
    const [lists, setLists] = useState(initialLists);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 1. State เริ่มต้น: ให้เป็น 'dashboard' เสมอเมื่อเปิดหน้า
    const initialListId = 'dashboard';
    const [currentListId, setCurrentListId] = useState(initialListId); 
    
    // 2. Logic สำหรับการจัดการ Task (ใช้ List ID ในการอัปเดต)
    const updateTasksInList = (listId, newTasks) => {
        setLists(lists.map(list => 
            list.id === listId ? { ...list, tasks: newTasks } : list
        ));
    };

    const handleAddTask = (listId, text) => {
        const listToUpdate = lists.find(list => list.id === listId);
        if (!listToUpdate) return;

        const newTask = { id: Date.now(), text, completed: false, overdue: false };
        updateTasksInList(listId, [newTask, ...listToUpdate.tasks]);
    };

    const handleToggleTask = (listId, taskId) => {
        const listToUpdate = lists.find(list => list.id === listId);
        if (!listToUpdate) return;
        
        const newTasks = listToUpdate.tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        updateTasksInList(listId, newTasks);
    };

    const handleDeleteTask = (listId, taskId) => {
        const listToUpdate = lists.find(list => list.id === listId);
        if (!listToUpdate) return;
        
        const newTasks = listToUpdate.tasks.filter(task => task.id !== taskId);
        updateTasksInList(listId, newTasks);
    };

    // 3. Logic สำหรับการเพิ่ม List ใหม่
    const handleAddList = (listName) => {
        const newList = {
            id: Date.now(),
            name: listName,
            color: 'text-gray-500', 
            tasks: [],
        };
        const updatedLists = [...lists, newList];
        setLists(updatedLists);
        setCurrentListId(newList.id); // สลับไป List ใหม่ทันที
    };


    // 4. การคำนวณ Task ที่ใช้งานอยู่
    
    // รวบรวม Task ทั้งหมดจากทุก List (ใช้สำหรับ Dashboard View)
    const allTasks = useMemo(() => {
        // เพิ่ม listId และ listName เข้าไปใน Task เพื่อใช้ในการอัปเดต/แสดงผลใน Dashboard View
        return lists.flatMap(list => 
            list.tasks.map(task => ({ 
                ...task, 
                listId: list.id, 
                listName: list.name 
            }))
        );
    }, [lists]);
    
    // กำหนดชุด Task ที่จะนำมาแสดงผล
    const activeTasks = currentListId === 'dashboard' 
        ? allTasks 
        : (lists.find(list => list.id === currentListId)?.tasks || []);

    // กำหนดชื่อ Title ของหน้าปัจจุบัน
    const activeViewName = currentListId === 'dashboard'
        ? 'Dashboard (รวมทุกรายการ)'
        : (lists.find(list => list.id === currentListId)?.name || 'กรุณาเลือก List');

    // กรอง Task ที่กำลังใช้งาน
    const pendingTasks = activeTasks.filter(t => !t.completed);
    const completedTasks = activeTasks.filter(t => t.completed);
    
    // คำนวณ Summary Card
    const summaryData = useMemo(() => {
        const overdue = pendingTasks.filter(t => t.overdue).length;
        return {
            tasksDueToday: pendingTasks.length,
            tasksCompletedToday: completedTasks.length,
            overdueTasks: overdue,
        };
    }, [pendingTasks, completedTasks]);

    const { tasksDueToday, tasksCompletedToday, overdueTasks } = summaryData;

    // 5. ฟังก์ชันสำหรับ Sidebar Click (เปลี่ยน List/View)
    const handleSelectList = (id) => {
        if (id === null) {
            setIsModalOpen(true);
        } else {
            setCurrentListId(id);
        }
    };


    return (
        <div className={`flex min-h-screen bg-gray-100`}>
            
            {/* 1. Sidebar */}
            <Sidebar 
                lists={lists} 
                userName={mockUserData.name} 
                onSelectList={handleSelectList}
                currentListId={currentListId}
            />

            {/* 2. Main Content Area */}
            <main className="flex-1 p-4 sm:p-8 lg:p-10">
                
                <header className="flex justify-between items-center mb-8">
                    {/* 🆕 แสดงชื่อ View ที่ใช้งานอยู่ */}
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        {activeViewName}
                    </h1>
                </header>

                {/* A. Summary Cards (ใช้ Real-time Data ของ View ที่เลือก) */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <SummaryCard
                        title="Tasks Pending"
                        value={tasksDueToday}
                        icon="🎯"
                        bgColor="bg-white"
                        textColor="text-indigo-600"
                    />
                    <SummaryCard
                        title="Completed"
                        value={tasksCompletedToday}
                        icon="✅"
                        bgColor="bg-white"
                        textColor="text-green-500"
                    />
                    <SummaryCard
                        title="Overdue Tasks"
                        value={overdueTasks}
                        icon="🚨"
                        bgColor="bg-white"
                        textColor="text-red-500"
                    />
                </section>
                
                {/* B. Add New Task Form (แสดงเมื่อไม่ได้อยู่ใน Dashboard View) */}
                {currentListId !== 'dashboard' && currentListId !== null && (
                    <AddTaskForm currentListId={currentListId} onAddTask={handleAddTask} />
                )}

                {/* C. Main Task List (Pending) */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        ⏳ Tasks Pending
                        <span className="ml-3 text-sm font-medium bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                            {pendingTasks.length} Items
                        </span>
                    </h2>

                    <div className="space-y-3">
                        {activeTasks.length > 0 ? (
                            pendingTasks.length > 0 ? (
                                pendingTasks.map(task => (
                                    <TaskItem 
                                        key={task.id} 
                                        // Task ID ที่ใช้ในการจัดการจะต้องมาจากตัว Task เอง (listId ที่ติดมากับ Task)
                                        listId={task.listId || currentListId} 
                                        task={task} 
                                        onToggle={handleToggleTask} 
                                        onDelete={handleDeleteTask} 
                                    />
                                ))
                            ) : (
                                <div className="p-6 text-center text-gray-500 bg-white rounded-lg border-2 border-dashed border-gray-300">
                                    🎉 ไม่มีงานค้างใน List {currentListId === 'dashboard' ? 'ทั้งหมด' : `"${activeViewName}"`}!
                                </div>
                            )
                        ) : (
                            // แสดงเมื่อไม่มี List หรือไม่มี Task ใน View ที่เลือก
                            <div className="p-6 text-center text-gray-700 bg-white rounded-lg border border-indigo-300">
                                {currentListId === 'dashboard'
                                    ? 'กรุณากด + เพื่อสร้าง List งานใหม่'
                                    : 'กรุณาเลือก List หรือกด + เพื่อสร้าง List ใหม่'}
                            </div>
                        )}
                    </div>
                </section>

                {/* D. Completed Tasks List */}
                {completedTasks.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            ✅ Completed ({completedTasks.length})
                        </h2>
                        {/* แสดงรายการ Task ที่เสร็จแล้ว (สามารถ Map completedTasks ได้ที่นี่) */}
                    </section>
                )}

            </main>
            
            {/* 3. Modal สำหรับเพิ่ม List ใหม่ */}
            <AddListModal 
                isVisible={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onAddList={handleAddList}
            />

        </div>
    );
}

export default AppDashboard;