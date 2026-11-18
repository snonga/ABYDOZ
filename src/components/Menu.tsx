import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Menu() {
    const navItems = [
        { path: '/comment-ca-marche', label: 'Comment ça marche' },
        { path: '/bourse-de-fret', label: 'Bourse de fret' },
        { path: '/outils-et-services', label: 'Outils et services' },
        { path: '/sos-chauffeur', label: 'SOS chauffeur' },
        { path: '/support', label: 'Support' },
        { path: '/Apropos', label: 'À propos' },
        { path: '/legal', label: 'Légal' },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="bg-[#820024] text-white fixed top-0 inset-x-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center h-auto md:h-16 py-3 md:py-0">

                {/* En-tête : Logo + Bouton Burger Mobile */}
                <div className="w-full md:w-auto flex justify-between items-center">
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="text-2xl font-bold tracking-tight text-white hover:opacity-95 transition-opacity"
                    >
                        ABYDOZ
                    </Link>

                    {/* Bouton Hamburger (Visible uniquement sur mobile) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="md:hidden text-slate-200 hover:text-white focus:outline-none p-1"
                        aria-label="Toggle Navigation"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation Principale & Action */}
                <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto items-center mt-4 md:mt-0 space-y-3 md:space-y-0 md:space-x-1`}>
                    <ul className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-2 md:space-y-0 text-sm font-medium">
                        {navItems.map((item) => (
                            <li key={item.path} className="w-full md:w-auto">
                                <NavLink
                                    to={item.path}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-lg transition-colors duration-200 ${isActive
                                            ? 'bg-white/20 text-white font-semibold'
                                            : 'text-slate-200 hover:text-white hover:bg-white/10'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Bouton de Connexion */}
                    <div className="pt-2 md:pt-0 md:ml-4 w-full md:w-auto flex justify-center">
                        <Link
                            to="/login"
                            onClick={closeMenu}
                            className="w-full md:w-auto text-center px-4 py-1.5 rounded-lg text-white border-2 border-white/80 font-semibold transition-all duration-200 hover:bg-white hover:text-[#820024] hover:border-white shadow-sm"
                        >
                            Se connecter
                        </Link>
                    </div>
                </nav>

            </div>
        </header>
    );
}

export default Menu;