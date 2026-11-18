import { Link } from 'react-router-dom';

export default function OutilServices() {
    const services = [
        {
            titre: 'Gestion de flotte & Suivi GPS',
            description: 'Localisez vos véhicules en temps réel, optimisez les itinéraires et suivez la consommation de carburant de vos camions.',
            statut: 'Disponible',
        },
        {
            titre: 'Calculateur de coûts de transport',
            description: 'Estimez les coûts de péage, de carburant et de maintenance pour définir des tarifs rentables sur vos trajets.',
            statut: 'Disponible',
        },
        {
            titre: 'Gestionnaire de documents de transport',
            description: 'Centralisez vos lettres de voiture (CMR), licences de transport et attestations d’assurance en un lieu sécurisé.',
            statut: 'Disponible',
        },
        {
            titre: 'Module de facturation automatique',
            description: 'Générez des factures professionnelles et suivez les règlements de vos prestations de transport en toute simplicité.',
            statut: 'Bientôt disponible',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* En-tête de la page */}
                <div className="bg-[#820024] text-white rounded-2xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full">
                            Solutions Logistiques
                        </span>
                        <h1 className="text-3xl font-extrabold mt-3">Outils et Services</h1>
                        <p className="text-white/80 text-sm mt-2 max-w-xl">
                            Une suite complète d'outils numériques conçus pour simplifier la gestion quotidienne
                            de vos opérations de transport et optimiser votre rentabilité.
                        </p>
                    </div>
                    <Link
                        to="/login"
                        className="px-6 py-3 bg-white text-[#820024] font-semibold rounded-lg shadow-md hover:bg-slate-100 transition-colors text-sm shrink-0"
                    >
                        Accéder aux outils
                    </Link>
                </div>

                {/* Grille des services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${service.statut === 'Disponible'
                                            ? 'bg-emerald-100 text-emerald-800'
                                            : 'bg-amber-100 text-amber-800'
                                        }`}>
                                        {service.statut}
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2">{service.titre}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-100">
                                <Link
                                    to="/login"
                                    className="text-xs font-semibold text-[#820024] hover:underline inline-block"
                                >
                                    En savoir plus ➔
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section Besoin sur mesure */}
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Besoin d'un outil spécifique ?</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                        ABYDOZ développe continuellement de nouvelles fonctionnalités pour s'adapter aux besoins du secteur logistique.
                    </p>
                    <div className="pt-2">
                        <Link
                            to="/support"
                            className="inline-block px-6 py-3 bg-[#820024] text-white font-semibold rounded-lg shadow-md hover:bg-[#68001d] transition-colors text-sm"
                        >
                            Contacter l'équipe produit
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}