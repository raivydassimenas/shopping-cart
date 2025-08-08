import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">Shopping Cart</div>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/shop" className="hover:underline">Shop</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;