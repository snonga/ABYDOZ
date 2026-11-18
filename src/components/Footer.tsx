function Footer() {
    return (
        <>
            <section className="bg-gray-800 text-white p-4 w-full fixed bottom-0 inset-x-0 z-50">
                <footer className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-sm md:text-base">&copy; 2026 ABYDOZ. Tous droits réservés.</p>
                    <nav>
                        <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm md:text-base">
                            <li><a href="#" className="hover:underline transition-colors">Politique de confidentialité</a></li>
                            <li><a href="#" className="hover:underline transition-colors">Conditions d'utilisation</a></li>
                            <li><a href="#" className="hover:underline transition-colors">Mentions légales</a></li>
                            <li><a href="#" className="hover:underline transition-colors">À propos</a></li>
                            <li><a href="#" className="hover:underline transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:underline transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:underline transition-colors">Contact</a></li>
                        </ul>
                    </nav>
                </footer>
            </section>
        </>
    )
}
export default Footer;