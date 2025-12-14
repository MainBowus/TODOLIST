import React from 'react';
// --- นำเข้าไฟล์รูปภาพ ---
import photo1 from './assets/91fdc2ca11733360164351230226cec8.jpg';



// Header Component (Minimal & Professional)
const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Checklist<span className="text-pink-500">.</span>
            </h1>
            <div className="flex items-center space-x-3">
                <a 
                    href="/app" 
                    className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 transition duration-150"
                >
                    Sign In
                </a>
                <a
                    href="/signup"
                    className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Start Free
                </a>
            </div>
        </div>
    </header>
);

// Pain Points Component (เหมือนเดิม)
const PainPoints = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
                จุดจบของงานค้างและความวุ่นวาย
            </h2>
             <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
                เราออกแบบ Checklist มาเพื่อแก้ไขปัญหาพื้นฐานที่คุณเจอในชีวิตประจำวัน
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pain Point Card 1: Focus */}
                <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl transition duration-300 hover:shadow-xl hover:bg-white">
                    <div className="text-4xl mb-4 text-pink-600">🎯</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">ขาด Focus</h3>
                    <p className="text-gray-600">Dashboard สรุปงานวันนี้, งานสำคัญ, และงานใกล้ครบกำหนด เพื่อให้คุณรู้ว่าต้องทำอะไรก่อน</p>
                </div>
                
                {/* Pain Point Card 2: Organization */}
                <div className="p-8 bg-indigo-50 border border-indigo-200 rounded-2xl transition duration-300 hover:shadow-xl hover:bg-white">
                    <div className="text-4xl mb-4 text-indigo-600">📂</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">ไม่เป็นระบบ</h3>
                    <p className="text-gray-600">สร้างหลาย List เพื่อแบ่งหมวดหมู่ (งาน, ฟิตเนส, เรียน) และจัดเรียงด้วย Drag & Drop</p>
                </div>

                {/* Pain Point Card 3: Mobile Usability */}
                <div className="p-8 bg-pink-50 border border-pink-200 rounded-2xl transition duration-300 hover:shadow-xl hover:bg-white">
                    <div className="text-4xl mb-4 text-yellow-600">✨</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">ต้องใช้หลายอุปกรณ์</h3>
                    <p className="text-gray-600">Responsive design 100% ใช้งานง่ายบนมือถือเหมือนแอปฯ เนทีฟ</p>
                </div>
            </div>
        </div>
    </section>
);

// Core Features Component (ใช้ photo1 ในทุกกรอบ)
const CoreFeatures = () => (
    <section className="py-24 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
                ฟีเจอร์ที่ใช่สำหรับ Checklist ของคุณ
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Feature 1: Task Management - Text */}
                <div>
                    <h3 className="text-sm font-semibold uppercase text-indigo-600 mb-3 tracking-widest">
                        Task Management
                    </h3>
                    <h4 className="text-3xl font-bold text-gray-800 mb-6">
                        ทุกรายละเอียดของงานถูกควบคุม
                    </h4>
                    <p className="text-lg text-gray-600 mb-8">
                        กำหนดคุณสมบัติทั้งหมดที่จำเป็นสำหรับ Task ตั้งแต่ความสำคัญ (Priority) จนถึง Deadline ทำให้คุณไม่พลาดทุกรายละเอียดของงานที่ต้องทำ
                    </p>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center">
                            <span className="text-xl mr-3 text-pink-500">⭐</span>
                            <span className="font-medium">Priority (Low / Medium / High)</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-xl mr-3 text-pink-500">📅</span>
                            <span className="font-medium">Deadline (กำหนดวันและเวลา)</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-xl mr-3 text-pink-500">📝</span>
                            <span className="font-medium">Notes (พื้นที่สำหรับใส่ข้อความเพิ่มเติม)</span>
                        </li>
                    </ul>
                </div>
                
                {/* Visual Placeholder for Task Management UI -> ใช้ photo1 */}
                <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                    <img 
                        src={photo1} 
                        alt="Task Detail Mockup" 
                        className="w-full h-full object-cover" 
                    />
                </div>
                
                {/* Feature 2: Dashboard & Stats (สลับด้าน) */}
                <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
                    {/* Visual Placeholder for Dashboard UI -> ใช้ photo1 */}
                    <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-white order-2 lg:order-1">
                        <img 
                            src={photo1} 
                            alt="Home Dashboard Stats" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    
                    <div className="order-1 lg:order-2">
                        <h3 className="text-sm font-semibold uppercase text-indigo-600 mb-3 tracking-widest">
                            Home Dashboard
                        </h3>
                        <h4 className="text-3xl font-bold text-gray-800 mb-6">
                            สถิติรายวันและการสรุปภาพรวม
                        </h4>
                        <p className="text-lg text-gray-600 mb-8">
                            ไม่ต้องเดาอีกต่อไปว่างานค้างอยู่ที่ไหน ติดตามความสำเร็จในแต่ละวันด้วย Daily Stats และดูว่า List ไหนที่คุณใช้งานเยอะที่สุด
                        </p>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <span className="text-xl mr-3 text-pink-500">📊</span>
                                <span className="font-medium">Daily Stats: จำนวน Task ที่สำเร็จต่อวัน</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-xl mr-3 text-pink-500">🔔</span>
                                <span className="font-medium">Highlight: งานที่ใกล้ Deadline และมีความสำคัญสูง</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


// Final Call to Action (CTA) Section
const FinalCTA = () => (
    <section className="py-24 bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-5xl font-extrabold text-white mb-6">
                เริ่มต้นใช้งาน Checklist ได้ฟรี
            </h3>
            <p className="text-xl text-indigo-200 mb-10 max-w-3xl mx-auto">
                ลงทะเบียนวันนี้เพื่อจัดการงานส่วนตัวของคุณ และอัพเกรดเป็น Pro เมื่อคุณพร้อมสำหรับฟีเจอร์ระดับทีม (Future)
            </p>
            <a
                href="/signup"
                className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 transform hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-pink-300"
            >
                Get Started
            </a>
        </div>
    </section>
);


// Footer Component (สวยงามและมืออาชีพ)
const Footer = () => (
    <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10 mb-8">
                {/* Logo & Slogan */}
                <div className="col-span-2 md:col-span-1">
                    <h4 className="text-2xl font-extrabold text-white mb-3">Checklist<span className="text-pink-500">.</span></h4>
                    <p className="text-sm text-gray-400">Simplify your life, one task at a time.</p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h4 className="text-sm font-semibold uppercase mb-4 text-gray-300">Product</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-indigo-400 transition">Features</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition">Pricing</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition">Updates</a></li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h4 className="text-sm font-semibold uppercase mb-4 text-gray-300">Company</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-indigo-400 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition">Careers</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h4 className="text-sm font-semibold uppercase mb-4 text-gray-300">Legal</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-indigo-400 transition">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Checklist. All rights reserved. Built with MERN Stack.
            </div>
        </div>
    </footer>
);


// --- Main Component (LandingPage.jsx) ---
function LandingPage() {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <Header />

            {/* HERO Section (แสดง photo1) */}
            <section className="pt-40 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tightest leading-tight mb-6">
                        จัดการชีวิตให้ง่ายดาย<br/>ด้วย Checklist ที่ทรงพลัง
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10 font-light">
                        ออกแบบมาสำหรับคนยุคใหม่ที่ต้องการระบบจัดการงานที่ **Minimal, Flexible** และมีฟีเจอร์ครบถ้วนตามความต้องการของคุณ
                    </p>
                    <a
                        href="/signup"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-pink-500 rounded-lg shadow-xl hover:bg-pink-600 transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-pink-300"
                    >
                        เริ่มต้นใช้งานฟรีทันที!
                    </a>
                    
                    {/* *** จุดที่ 1: Hero Image ใช้ photo1 *** */}
                    <div className="mt-20 relative rounded-xl shadow-2xl overflow-hidden border-8 border-white">
                        <div className="h-96 md:h-[500px]">
                            <img 
                                src={photo1} 
                                alt="Minimalist Checklist application UI Hero Image" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            <PainPoints />
            <CoreFeatures />
            <FinalCTA />
            <Footer />
        </div>
    );
}

export default LandingPage;