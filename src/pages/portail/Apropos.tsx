import { Link } from 'react-router-dom';

export function Apropos() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* En-tête de la page */}
                <div className="bg-[#820024] text-white rounded-2xl p-8 sm:p-12 text-center shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full">
                        Qui sommes-nous ?
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mt-4">
                        À propos d'ABYDOZ
                    </h1>
                    <p className="text-white/80 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
                        Découvrez notre vision de la logistique moderne et notre engagement pour transformer
                        le transport de marchandises à travers des solutions numériques innovantes.
                    </p>
                </div>

                {/* Section Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">Notre Mission</h2>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Simplifier la mise en relation entre expéditeurs et transporteurs routiers grâce à une plateforme
                            performante. Nous luttons contre les trajets à vide, optimisons les coûts de transport et garantissons
                            une visibilité totale sur chaque expédition.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">Notre Vision</h2>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Devenir le partenaire technologique de référence pour le transport et la logistique, en offrant
                            des outils de gestion modernes, sécurisés et accessibles 24h/24 aux professionnels du secteur.
                        </p>
                    </div>
                </div>

                {/* Section Nos Valeurs */}
                <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 text-center">Nos Valeurs Fondamentales</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                        <div className="space-y-2">
                            <h3 className="font-bold text-slate-900 text-base">Transparence</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Des tarifs clairs, un suivi en temps réel et des informations vérifiées pour instaurer
                                une relation de confiance durable entre partenaires.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-slate-900 text-base">Sécurité</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                La protection de vos données, la sécurité de vos chargements et l'assistance de vos chauffeurs
                                sont au cœur de nos priorités quotidiennes.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-slate-900 text-base">Innovation</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Amélioration continue de notre bourse de fret et de nos outils pour répondre précisément
                                aux défis logistiques de demain.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Appel à l'action */}
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Envie de collaborer avec nous ?</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                        Rejoignez le réseau ABYDOZ et profitez de notre plateforme dès aujourd'hui.
                    </p>
                    <div className="pt-2">
                        <Link
                            to="/login"
                            className="inline-block px-6 py-3 bg-[#820024] text-white font-semibold rounded-lg shadow-md hover:bg-[#68001d] transition-colors text-sm"
                        >
                            Rejoindre la plateforme
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}