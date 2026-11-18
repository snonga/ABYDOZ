import { useState } from 'react';

export default function SOSDrivers() {
    const [alertSent, setAlertSent] = useState(false);
    const [sosData, setSosData] = useState({
        driverName: '',
        phone: '',
        vehiclePlate: '',
        location: '',
        emergencyType: 'Panne mécanique',
        details: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Alerte SOS Chauffeur transmise :', sosData);
        setAlertSent(true);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* En-tête de la page */}
                <div className="bg-[#820024] text-white rounded-2xl p-8 sm:p-12 text-center shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full">
                        Assistance d'urgence 24H/24
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mt-4">
                        SOS Chauffeur ABYDOZ
                    </h1>
                    <p className="text-white/80 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
                        En cas de panne, d'accident ou d'urgence sur la route, déclenchez une alerte immédiate
                        pour recevoir l'assistance de notre équipe de support technique et logistique.
                    </p>
                </div>

                {/* Ligne d'urgence directe */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                    <div>
                        <h2 className="font-bold text-slate-900 text-base">Besoin d'une assistance téléphonique immédiate ?</h2>
                        <p className="text-xs text-slate-600 mt-0.5">Notre permanence routière est active en continu.</p>
                    </div>
                    <a
                        href="tel:+237600000000"
                        className="px-6 py-3 bg-[#820024] text-white font-bold rounded-lg text-sm hover:bg-[#68001d] transition-colors shrink-0"
                    >
                        Appeler le +237 600 00 00 00
                    </a>
                </div>

                {/* Formulaire d'alerte SOS */}
                <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Déclarer un incident sur la route</h2>
                    <p className="text-xs text-slate-600 mb-8">
                        Remplissez ce formulaire pour transmettre votre position et la nature de votre problème à notre centre de crise.
                    </p>

                    {alertSent ? (
                        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-xl text-center space-y-3">
                            <h3 className="font-bold text-lg">Alerte SOS transmise avec succès !</h3>
                            <p className="text-xs max-w-md mx-auto leading-relaxed">
                                Notre équipe d'intervention a reçu votre position et vos informations. Un technicien ou un agent
                                de support va vous contacter en urgence sur votre numéro de téléphone.
                            </p>
                            <div className="pt-4">
                                <button
                                    onClick={() => setAlertSent(false)}
                                    className="px-6 py-2.5 bg-[#820024] text-white text-xs font-semibold rounded-lg hover:bg-[#68001d] transition-colors"
                                >
                                    Envoyer une autre alerte
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                                        Nom du chauffeur
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Votre nom complet"
                                        value={sosData.driverName}
                                        onChange={(e) => setSosData({ ...sosData, driverName: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                                        Numéro de téléphone joignable
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="ex. +237 6..."
                                        value={sosData.phone}
                                        onChange={(e) => setSosData({ ...sosData, phone: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                                        Immatriculation du véhicule / Camion
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="ex. LT 123 AB"
                                        value={sosData.vehiclePlate}
                                        onChange={(e) => setSosData({ ...sosData, vehiclePlate: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                                        Type d'urgence
                                    </label>
                                    <select
                                        value={sosData.emergencyType}
                                        onChange={(e) => setSosData({ ...sosData, emergencyType: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                                    >
                                        <option value="Panne mécanique">Panne mécanique</option>
                                        <option value="Crevaison / Pneumatique">Crevaison / Problème pneumatique</option>
                                        <option value="Accident de la route">Accident de la route</option>
                                        <option value="Problème de chargement">Problème de chargement / arrimage</option>
                                        <option value="Autre urgence">Autre urgence</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                                    Localisation exacte / Position géographique
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="ex. Axe Douala-Yaoundé, à hauteur de Edéa"
                                    value={sosData.location}
                                    onChange={(e) => setSosData({ ...sosData, location: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                                    Détails complémentaires de la situation
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Décrivez brièvement le problème rencontré pour faciliter l'intervention..."
                                    value={sosData.details}
                                    onChange={(e) => setSosData({ ...sosData, details: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#820024] text-white font-bold rounded-lg hover:bg-[#68001d] transition-colors shadow-lg text-sm tracking-wide uppercase"
                            >
                                Lancer l'alerte SOS immédiate
                            </button>
                        </form>
                    )}
                </div>

                {/* Pied de page informatif */}
                <div className="text-center text-xs text-slate-500">
                    En cas d'urgence vitale, veuillez également contacter les forces de sécurité et les services de secours locaux.
                </div>

            </div>
        </div>
    );
}