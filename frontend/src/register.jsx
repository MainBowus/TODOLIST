import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// *** Component สำหรับหน้า Sign Up ***
const SignupPage = () => {
    const navigate = useNavigate();

    // ฟังก์ชันสำหรับจัดการการ Submit ฟอร์ม
    const handleSignup = (e) => {
        e.preventDefault();
        
        // --- LOGIC: ตรวจสอบข้อมูลและสร้างบัญชีที่นี่ ---
        console.log("Attempting Sign Up...");
        
        // เมื่อลงทะเบียนสำเร็จ นำทางไปยังหน้าแอปพลิเคชันหลัก หรือหน้า Login
        // ในกรณีนี้จะให้ไปหน้าแอปฯ หลักเลย (เหมือนเริ่มใช้งานฟรีทันที)
        navigate('/app'); 
    };

    return (
        // Container หลัก: พื้นหลังสีเทาอ่อนเต็มหน้าจอ
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h1 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight">
                    Checklist<span className="text-pink-500">.</span>
                </h1>
                <h2 className="mt-8 text-center text-2xl font-bold text-gray-900">
                    เริ่มต้นฟรีวันนี้
                </h2>
                <p className="mt-2 text-center text-sm text-gray-500">
                    มีบัญชีอยู่แล้วใช่ไหม?{' '}
                    <Link 
                        to="/login" // ลิงก์ไปหน้า Login
                        className="font-medium text-indigo-600 hover:text-indigo-700 transition duration-150"
                    >
                        ลงชื่อเข้าใช้
                    </Link>
                </p>
            </div>

            {/* Sign Up Card - Clean และ Professional */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-10 px-6 shadow-xl rounded-xl sm:px-10 border border-gray-100">
                    
                    {/* ฟอร์ม Sign Up */}
                    <form className="space-y-6" onSubmit={handleSignup}>
                        
                        {/* 1. Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                ชื่อ
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="ชื่อที่คุณใช้"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* 2. Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                อีเมลแอดเดรส
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="yourname@domain.com"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* 3. Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                สร้างรหัสผ่าน
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <p className="mt-2 text-xs text-gray-500">
                                รหัสผ่านควรมีอย่างน้อย 8 ตัวอักษร
                            </p>
                        </div>
                        
                        {/* 4. Submit Button (สี Pink เน้น CTA) */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150"
                            >
                                ลงทะเบียนและเริ่มใช้งาน
                            </button>
                        </div>
                    </form>
                    
                    {/* 5. ตัวเลือก Login ด้วย Social Media */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-3 bg-white text-gray-500 font-medium">
                                    หรือลงทะเบียนผ่าน
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            {/* Google Button */}
                            <button
                                type="button"
                                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-150"
                            >
                                {/* SVG icon ของ Google (ใช้ icon เดียวกับหน้า Login) */}
                                <svg className="w-4 h-4 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.0003 4.88795C14.1481 4.88795 15.8286 5.65586 17.1519 6.89895L20.4496 3.9876C18.2562 2.06737 15.2503 1 12.0003 1C7.88049 1 4.29548 3.25413 2.37617 6.88373L5.80387 9.55395C6.72379 7.08639 9.17647 4.88795 12.0003 4.88795Z" fill="#EA4335"/><path d="M12.0003 23C15.2503 23 18.2562 21.9326 20.4496 20.0124L17.1519 17.1011C15.8286 18.3441 14.1481 19.112 12.0003 19.112C9.17647 19.112 6.72379 16.9136 5.80387 14.4461L2.37617 17.1163C4.29548 20.7459 7.88049 23 12.0003 23Z" fill="#34A853"/><path d="M23 12C23 11.206 22.9234 10.434 22.7758 9.68744H12.0003V14.3124H18.4907C18.1732 16.0396 17.1852 17.5146 15.6888 18.5284L15.689 18.5282L19.1167 21.1984L19.1177 21.1977C21.1685 19.349 22.9996 16.9037 22.9996 12.0003C22.9996 11.2057 23 10.4338 23 9.68713V9.68795H12.0003V14.3129H18.4907C18.1732 16.0396 17.1852 17.5146 15.6888 18.5284L15.689 18.5282L19.1167 21.1984L19.1177 21.1977C21.1685 19.349 22.9996 16.9037 22.9996 12.0003C22.9996 11.2057 23 10.4338 23 9.68713V9.68795H12.0003V14.3129H18.4907C18.1732 16.0396 17.1852 17.5146 15.6888 18.5284L15.689 18.5282L19.1167 21.1984L19.1177 21.1977C21.1685 19.349 22.9996 16.9037 22.9996 12.0003C22.9996 11.2057 23 10.4338 23 9.68713V9.68795Z" fill="#4285F4"/><path d="M5.80387 14.4461C5.58667 13.7547 5.48047 12.9806 5.48047 12C5.48047 11.0194 5.58667 10.2453 5.80387 9.55395L2.37617 6.88373C1.56497 8.35626 1 10.1259 1 12C1 13.8741 1.56497 15.6437 2.37617 17.1163L5.80387 14.4461Z" fill="#FBBC05"/></svg>
                                    ลงทะเบียนด้วย Google
                            </button>
                        </div>
                    </div>

                    {/* Terms and Conditions (ข้อบังคับสำหรับหน้า Signup) */}
                    <p className="mt-8 text-center text-xs text-gray-500">
                        เมื่อลงทะเบียน คุณได้ยอมรับ{' '}
                        <a href="#" className="font-medium text-gray-700 hover:text-indigo-700">เงื่อนไขการให้บริการ</a>{' '}
                        และ{' '}
                        <a href="#" className="font-medium text-gray-700 hover:text-indigo-700">นโยบายความเป็นส่วนตัว</a> ของเรา
                    </p>

                </div>
            </div>
            {/* Footer Text */}
            <p className="mt-10 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Checklist. All rights reserved.
            </p>
        </div>
    );
};

export default SignupPage;