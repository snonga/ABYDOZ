import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Support() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Message de support envoyé :', formData);
        setSubmitted(true);
    };

    const faqList = [
        {
            question: "Comment puis-je poster une offre sur la bourse de fret ?",
            answer: "Pour poster une offre, connectez-vous à votre espace client via le bouton 'Se connecter', puis accédez à la section 'Publier une offre' dans votre tableau de bord."
        },
        {
            question: "Quels sont les délais d'assistance en cas de panne (SOS Chauffeur) ?",
            answer: "Notre équipe d'assistance est joignable 24h/24 et 7j/7. Une réponse et une prise en charge sont initiées dans les 15 à 30 minutes suivant l'émission d'une alerte."
        },
        {
            question: "Comment créer un compte entreprise sur ABYDOZ ?",
            answer: "Vous pouvez activer votre compte directement depuis la page de connexion en cliquant sur 'Activer mon compte' ou en contactant notre service commercial."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* En-tête de la page */}
                <div className="bg-[#820024] text-white rounded-2xl p-8 sm:p-12 text-center shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full">
                        Centre d'assistance
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold mt-4">
                        Besoin d'aide ou de support ?
                    </h1>
                    <p className="text-white/80 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
                        Notre équipe d'assistance ABYDOZ est à votre disposition 24h/24 pour répondre à vos questions
                        et vous accompagner dans vos opérations logistiques.
                    </p>
                </div>

                {/* Section Formulaire de contact & Infos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Informations de contact rapides */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">Nos Coordonnées</h2>

                        <div className="space-y-4 text-sm">
                            <div>
                                <h3 className="font-semibold text-slate-900">Assistance Technique & Support</h3>
                                <p className="text-slate-600 text-xs mt-0.5">support@abydoz.com</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">Urgences Chauffeurs (24/7)</h3>
                                <p className="text-slate-600 text-xs mt-0.5">+237 600 00 00 00</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">Heures d'ouverture des bureaux</h3>
                                <p className="text-slate-600 text-xs mt-0.5">Lundi - Vendredi : 08h00 - 18h00</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                            <Link
                                to="/sos-chauffeur"
                                className="block text-center px-4 py-2 bg-slate-100 text-[#820024] text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                            >
                                Accéder au service SOS Chauffeur
                            </Link>
                        </div>
                    </div>

                    {/* Formulaire de message */}
                    <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h2>

                        {submitted ? (
                            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-2">
                                <h3 className="font-bold text-base">Message envoyé avec succès !</h3>
                                <p className="text-xs">
                                    Merci de nous avoir contactés. Un conseiller ABYDOZ vous répondra dans les plus brefs délais.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 text-xs font-semibold text-[#820024] underline"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                                            Nom complet
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Votre nom"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                                            Adresse e-mail
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="nom@exemple.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                                        Sujet
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Objet de votre demande"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        required
                                        placeholder="Décrivez votre demande en détail..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#820024]"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-[#820024] text-white font-semibold rounded-lg hover:bg-[#68001d] transition-colors shadow-md text-sm"
                                >
                                    Envoyer le message
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Section FAQ */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">Questions Fréquentes (FAQ)</h2>

                    <div className="space-y-4">
                        {faqList.map((item, index) => (
                            <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                                <h3 className="font-bold text-slate-900 text-sm">{item.question}</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}