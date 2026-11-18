import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BourseFret() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('tous');

    // Exemple de fausses annonces de fret pour illustrer la page
    const frets = [
        {
            id: 1,
            depart: 'Douala',
            arrivee: 'Yaoundé',
            poids: '24 Tonnes',
            type: 'Conteneur 40 pieds',
            date: '15 Nov 2026',
            societe: 'Logistique Cameroun SARL',
        },
        {
            id: 2,
            depart: 'Kribi',
            arrivee: 'Garoua',
            poids: '18 Tonnes',
            type: 'Marchandise générale (Palettes)',
            date: '16 Nov 2026',
            societe: 'Transports du Sud',
        },
        {
            id: 3,
            depart: 'Bafoussam',
            arrivee: 'Douala',
            poids: '12 Tonnes',
            type: 'Matériel agricole',
            date: '18 Nov 2026',
            societe: 'AgroFret Express',
        },
    ];

    const filteredFrets = frets.filter((fret) => {
        const matchesSearch =
            fret.depart.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fret.arrivee.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* En-tête de la page */}
                <div className="bg-[#820024] text-white rounded-2xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full">
                            Plateforme Logistique
                        </span>
                        <h1 className="text-3xl font-extrabold mt-3">Bourse de Fret</h1>
                        <p className="text-white/80 text-sm mt-2 max-w-xl">
                            Optimisez vos tournées en temps réel. Trouvez des chargements disponibles ou
                            publiez vos offres de transport en toute sécurité sur le réseau ABYDOZ.
                        </p>
                    </div>
                    <Link
                        to="/login"
                        className="px-6 py-3 bg-white text-[#820024] font-semibold rounded-lg shadow-md hover:bg-slate-100 transition-colors text-sm shrink-0"
                    >
                        Publier une offre / Proposer un camion
                    </Link>
                </div>

                {/* Barre de recherche et filtres */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="w-full sm:w-96">
                        <input
                            type="text"
                            placeholder="Rechercher par ville de départ ou d'arrivée..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full sm:w-auto px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                        >
                            <option value="tous">Tous les types de fret</option>
                            <option value="conteneur">Conteneurs</option>
                            <option value="vrac">Vrac / Palettes</option>
                        </select>
                    </div>
                </div>

                {/* Liste des offres disponibles */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900">Offres de chargement récentes</h2>

                    <div className="grid grid-cols-1 gap-4">
                        {filteredFrets.length > 0 ? (
                            filteredFrets.map((fret) => (
                                <div
                                    key={fret.id}
                                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                                >
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold text-slate-900 text-lg">{fret.depart}</span>
                                            <span className="text-slate-400">➔</span>
                                            <span className="font-bold text-slate-900 text-lg">{fret.arrivee}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                                            <span><strong>Type :</strong> {fret.type}</span>
                                            <span><strong>Poids :</strong> {fret.poids}</span>
                                            <span><strong>Date :</strong> {fret.date}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between w-full md:w-auto gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
                                        <span className="text-xs text-slate-500 italic">Par {fret.societe}</span>
                                        <Link
                                            to="/login"
                                            className="px-4 py-2 bg-[#820024] text-white text-xs font-semibold rounded-lg hover:bg-[#68001d] transition-colors"
                                        >
                                            Voir les détails
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 text-slate-500">
                                Aucune offre ne correspond à votre recherche.
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}