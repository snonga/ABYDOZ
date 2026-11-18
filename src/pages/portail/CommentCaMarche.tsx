import { Link } from 'react-router-dom';

export default function CommentCaMarche() {
    const etapesExpediteur = [
        {
            numero: '01',
            titre: 'Publiez votre besoin de fret',
            description: 'Renseignez la ville de départ, la destination, le type de marchandise ainsi que le tonnage exigé.',
        },
        {
            numero: '02',
            titre: 'Recevez des propositions validées',
            description: 'Les transporteurs vérifiés du réseau ABYDOZ soumettent leurs offres pour votre trajet.',
        },
        {
            numero: '03',
            titre: 'Suivez le transport en direct',
            description: 'Bénéficiez du suivi en temps réel de votre marchandise jusqu’à sa livraison à destination.',
        },
    ];

    const etapesTransporteur = [
        {
            numero: '01',
            titre: 'Trouvez des chargements disponibles',
            description: 'Consultez la bourse de fret pour repérer les offres de transport sur vos trajets retour ou habituels.',
        },
        {
            numero: '02',
            titre: 'Réservez et confirmez',
            description: 'Proposez vos tarifs ou acceptez les conditions publiées par l’expéditeur en quelques clics.',
        },
        {
            numero: '03',
            titre: 'Bénéficiez du support SOS Chauffeur',
            description: 'En cas de panne ou d’imprévu sur la route, nos équipes vous assistent immédiatement.',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* En-tête de la page */}
                <div className="bg-[#820024] text-white rounded-2xl p-8 sm:p-12 text-center shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full">
                        Guide d'utilisation
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mt-4">
                        Comment fonctionne ABYDOZ ?
                    </h1>
                    <p className="text-white/80 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
                        Une plateforme simple, transparente et sécurisée pour connecter directement les expéditeurs
                        et les transporteurs routiers.
                    </p>
                </div>

                {/* Section 1 : Pour les Expéditeurs */}
                <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-3">
                        <h2 className="text-2xl font-bold text-slate-900">Pour les Expéditeurs</h2>
                        <p className="text-slate-600 text-sm">Expédiez vos marchandises rapidement et en toute confiance.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {etapesExpediteur.map((etape) => (
                            <div key={etape.numero} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                                <div>
                                    <span className="text-3xl font-extrabold text-[#820024]">{etape.numero}</span>
                                    <h3 className="font-bold text-slate-900 mt-2 mb-2">{etape.titre}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{etape.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2 : Pour les Transporteurs */}
                <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-3">
                        <h2 className="text-2xl font-bold text-slate-900">Pour les Transporteurs</h2>
                        <p className="text-slate-600 text-sm">Optimisez le remplissage de vos camions et limitez les trajets à vide.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {etapesTransporteur.map((etape) => (
                            <div key={etape.numero} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                                <div>
                                    <span className="text-3xl font-extrabold text-[#820024]">{etape.numero}</span>
                                    <h3 className="font-bold text-slate-900 mt-2 mb-2">{etape.titre}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{etape.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Prêt à démarrer avec ABYDOZ ?</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                        Accédez dès maintenant à votre espace pour consulter la bourse de fret ou publier votre premier chargement.
                    </p>
                    <div className="pt-2">
                        <Link
                            to="/login"
                            className="inline-block px-6 py-3 bg-[#820024] text-white font-semibold rounded-lg shadow-md hover:bg-[#68001d] transition-colors text-sm"
                        >
                            Accéder à l'Espace Client
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}