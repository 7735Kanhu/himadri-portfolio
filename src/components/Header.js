import React, { useEffect, useState } from 'react';

const Header = ({ scrollToSection, refs }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-cyan-800 shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="sidebar-collapse">
                <nav className="w-full md:w-[1280px] text-white mx-auto uppercase">
                    <div className="container mx-auto flex justify-between items-center p-4">
                        <div className="navbar-translate flex justify-between w-full">
                            <a className="text-2xl font-bold" href="#" rel="tooltip">
                                Kanhu's Portfolio
                            </a>
                            <button
                                className="navbar-toggler md:hidden focus:outline-none"
                                type="button"
                                onClick={toggleMenu}
                            >
                                <span className="block w-6 h-1 bg-white mb-1"></span>
                                <span className="block w-6 h-1 bg-white mb-1"></span>
                                <span className="block w-6 h-1 bg-white"></span>
                            </button>
                        </div>
                        <div className="hidden md:flex md:justify-end" id="navigation">
                            <ul className="flex space-x-4">
                                <li>
                                    <a
                                        className="nav-link text-white hover:underline"
                                        href="#about"
                                        onClick={() => scrollToSection(refs.aboutRef)}
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-link text-white hover:underline"
                                        href="#experience"
                                        onClick={() => scrollToSection(refs.experienceRef)}
                                    >
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-link text-white hover:underline"
                                        href="#projects"
                                        onClick={() => scrollToSection(refs.projectRef)}
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-link text-white hover:underline"
                                        href="#skill"
                                        onClick={() => scrollToSection(refs.skillRef)}
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-link text-white hover:underline"
                                        href="#education"
                                        onClick={() => scrollToSection(refs.educationRef)}
                                    >
                                        Education
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="nav-link text-white hover:underline"
                                        href="#contact"
                                        onClick={() => scrollToSection(refs.contactRef)}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Sliding Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-cyan-800 text-white transform transition-transform duration-300 z-40 ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button onClick={toggleMenu} className="focus:outline-none text-white">
                        ✖
                    </button>
                </div>
                <ul className="flex flex-col space-y-4 p-4">
                    <li>
                        <a
                            className="nav-link text-white hover:underline"
                            href="#about"
                            onClick={() => {
                                scrollToSection(refs.aboutRef);
                                toggleMenu();
                            }}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-link text-white hover:underline"
                            href="#experience"
                            onClick={() => {
                                scrollToSection(refs.experienceRef);
                                toggleMenu();
                            }}
                        >
                            Experience
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-link text-white hover:underline"
                            href="#projects"
                            onClick={() => {
                                scrollToSection(refs.projectRef);
                                toggleMenu();
                            }}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-link text-white hover:underline"
                            href="#skill"
                            onClick={() => {
                                scrollToSection(refs.skillRef);
                                toggleMenu();
                            }}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-link text-white hover:underline"
                            href="#education"
                            onClick={() => {
                                scrollToSection(refs.educationRef);
                                toggleMenu();
                            }}
                        >
                            Education
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav-link text-white hover:underline"
                            href="#contact"
                            onClick={() => {
                                scrollToSection(refs.contactRef);
                                toggleMenu();
                            }}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
                    onClick={toggleMenu}
                ></div>
            )}
        </header>
    );
};

export default Header;
