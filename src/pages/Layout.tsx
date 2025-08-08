import Navbar from "../components/Navbar.tsx";

function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-grow p-4">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                © 2025 Raivydas Šimėnas. All rights reserved.
            </footer>
        </div>
    );
}

export default Layout;