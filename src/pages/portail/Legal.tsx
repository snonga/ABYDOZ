import { Link } from 'react-router-dom';

export default function Legal() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

                {/* En-tête de la page */}
                <div className="bg-[#820024] text-white px-8 py-10">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full">
                        Conformité & Juridique
                    </span>
                    <h1 className="text-3xl font-extrabold mt-4">Conditions Générales d'Utilisation</h1>
                    <p className="text-white/80 text-sm mt-2">
                        Dernière mise à jour : Novembre 2026 | ABYDOZ Plateforme Logistique
                    </p>
                </div>

                {/* Contenu des conditions générales */}
                <div className="p-8 sm:p-12 space-y-8 text-slate-700 text-sm leading-relaxed">

                    {/* Section 1 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                            1. Objet et champ d'application
                        </h2>
                        <p>
                            Les présentes conditions générales régissent l'utilisation de la plateforme numérique
                            <strong> ABYDOZ</strong>, incluant la bourse de fret, les outils de gestion logistique,
                            le service d'assistance SOS Chauffeur et l'ensemble des services associés.
                        </p>
                        <p>
                            En accédant à ce site web ou en utilisant nos services, vous acceptez sans réserve les
                            présentes conditions. Si vous refusez d'y souscrire, veuillez cesser l'utilisation de la plateforme.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                            2. Propriété intellectuelle
                        </h2>
                        <p>
                            L'ensemble du contenu de ce site web (textes, graphismes, logos, icônes, interfaces, code source,
                            logiciels) est la propriété exclusive d'<strong>ABYDOZ</strong> ou de ses partenaires et est protégé
                            par les lois nationales et internationales relatives à la propriété intellectuelle.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification ou diffusion, intégrale ou partielle, est
                            strictement interdite sans l'autorisation écrite préalable d'ABYDOZ.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                            3. Accès aux services et Bourse de fret
                        </h2>
                        <p>
                            ABYDOZ s'efforce d'assurer un accès continu à sa bourse de fret et à ses outils 24h/24 et 7j/7.
                            Toutefois, l'accès peut être suspendu en raison d'opérations de maintenance, de pannes techniques
                            ou de cas de force majeure.
                        </p>
                        <p>
                            Les utilisateurs de la bourse de fret et du service SOS Chauffeur s'engagent à fournir des
                            informations exactes et à respecter les réglementations en vigueur dans le secteur du transport routier.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                            4. Protection des données personnelles (Confidentialité)
                        </h2>
                        <p>
                            Les informations recueillies lors de votre connexion à votre espace client ou lors de l'utilisation
                            de nos services font l'objet d'un traitement informatique destiné à la gestion de vos expéditions
                            et de votre sécurité. Conformément à la réglementation sur la protection des données, vous disposez
                            d'un droit d'accès, de rectification et de suppression de vos données.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                            5. Limitation de responsabilité
                        </h2>
                        <p>
                            ABYDOZ décline toute responsabilité en cas de dommages directs ou indirects résultant de l'utilisation
                            ou de l'impossibilité d'utiliser la plateforme, d'interruptions de service, ou de la présence de virus
                            informatiques malgré les mesures de sécurité mises en place.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                            6. Contact et support juridique
                        </h2>
                        <p>
                            Pour toute question relative aux présentes conditions générales ou pour toute réclamation concernant
                            le site, vous pouvez contacter notre équipe à l'adresse suivante :
                        </p>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-slate-800 font-medium">
                            E-mail : <a href="mailto:legal@abydoz.com" className="text-[#820024] hover:underline">legal@abydoz.com</a> |
                            Visitez également notre page <Link to="/support" className="text-[#820024] hover:underline font-semibold">Support</Link>.
                        </div>
                    </section>

                </div>

                {/* Pied de page interne */}
                <div className="bg-slate-50 px-8 py-6 border-t border-slate-200 text-center text-xs text-slate-500">
                    © 2026 ABYDOZ Logistics. Tous droits réservés.
                </div>

            </div>
        </div>
    );
}