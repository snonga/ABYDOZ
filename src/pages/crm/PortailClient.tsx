import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PortailClient() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        identifier: '',
        password: '',
        rememberMe: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Données de connexion :', formData);
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-100 p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-200">

                {/* Section Gauche : Formulaire de connexion */}
                <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                        {/* Logo ABYDOZ */}
                        <div className="mb-8">
                            <span className="text-3xl font-extrabold tracking-tight text-[#820024]">
                                ABYDOZ
                            </span>
                        </div>

                        {/* Titre & Sous-titre */}
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">
                            Bienvenue sur votre espace
                        </h1>
                        <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                            Connectez-vous à votre compte pour accéder à la bourse de fret,
                            suivre vos services et gérer vos activités.
                        </p>

                        {/* Formulaire */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Identifiant / Email */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                                    E-mail ou identifiant
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="ex. nom@exemple.com"
                                    value={formData.identifier}
                                    onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#820024] focus:border-transparent text-sm transition-all"
                                />
                            </div>

                            {/* Mot de passe */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                                    Mot de passe
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        placeholder="Saisissez votre mot de passe"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full px-4 py-3 pr-16 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#820024] focus:border-transparent text-sm transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-semibold text-slate-500 hover:text-slate-800 focus:outline-none"
                                    >
                                        {showPassword ? 'Masquer' : 'Afficher'}
                                    </button>
                                </div>
                            </div>

                            {/* Options : Se souvenir de moi & Mot de passe oublié */}
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center space-x-2 cursor-pointer text-slate-600 hover:text-slate-900">
                                    <input
                                        type="checkbox"
                                        checked={formData.rememberMe}
                                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                        className="w-4 h-4 rounded text-[#820024] focus:ring-[#820024] border-slate-300"
                                    />
                                    <span>Se souvenir de moi</span>
                                </label>
                                <Link
                                    to="/forgot-password"
                                    className="text-xs font-semibold text-[#820024] hover:underline"
                                >
                                    Mot de passe oublié ?
                                </Link>
                            </div>

                            {/* Bouton de soumission */}
                            <button
                                type="submit"
                                className="w-full py-3.5 px-4 bg-[#820024] text-white font-semibold rounded-lg hover:bg-[#68001d] transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#820024] focus:ring-offset-2"
                            >
                                Se connecter
                            </button>
                        </form>
                    </div>

                    {/* Lien d'inscription */}
                    <div className="mt-8 pt-6 border-t border-slate-200 text-center text-sm text-slate-600">
                        Première visite sur ABYDOZ ?{' '}
                        <Link to="/register" className="font-semibold text-[#820024] hover:underline">
                            Activer mon compte
                        </Link>
                    </div>
                </div>

                {/* Section Droite : Panneau d'information & Avantages */}
                <div className="w-full md:w-1/2 bg-[#820024] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">

                    <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                        {/* Badge officiel */}
                        <div className="inline-block bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">
                            Portail client officiel
                        </div>

                        {/* Accroche principale */}
                        <h2 className="text-3xl font-extrabold leading-tight mb-4">
                            Vos services de transport, en toute transparence
                        </h2>
                        <p className="text-white/80 text-sm mb-10 leading-relaxed">
                            ABYDOZ vous donne un accès direct 24h/24 à vos offres de fret,
                            au suivi de vos véhicules et aux outils de gestion logistique.
                        </p>

                        {/* Liste d'avantages */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-sm mb-1">Bourse de fret & chargements</h3>
                                <p className="text-xs text-white/75">
                                    Consultez les offres disponibles et réservez vos frets en quelques clics.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-sm mb-1">Suivi des opérations</h3>
                                <p className="text-xs text-white/75">
                                    Surveillez vos trajets et maîtrisez vos coûts d'exploitation.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-sm mb-1">SOS Chauffeur & Support</h3>
                                <p className="text-xs text-white/75">
                                    Soumettez vos demandes d'assistance et suivez-les en temps réel.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Reassurance Footer */}
                    <div className="relative z-10 pt-8 mt-8 border-t border-white/20 flex flex-wrap gap-6 text-xs text-white/80">
                        <span>Connexion sécurisée</span>
                        <span>Service disponible 24H/24</span>
                    </div>

                </div>

            </div>
        </div>
    );
}