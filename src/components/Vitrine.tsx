function Vitrine() {
    return (
        <section className="bg-[#f0f0f0] text-[#141414] min-h-screen pt-20 pb-8 mb-12 px-4 flex flex-col items-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center space-y-6">

                {/* Banner d'accueil / Call to Action */}
                <article className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-4xl border border-gray-100">
                    <div className="text-center md:text-left">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            <span className="text-2xl md:text-4xl font-extrabold text-[#820024] block md:inline mr-2">
                                Bienvenue sur ABYDOZ
                            </span>
                            votre plateforme de mise en relation pour le transport de vos marchandises.
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex justify-center shrink-0">
                        <a
                            href="#"
                            className="w-full md:w-auto text-center bg-[#820024] text-white px-8 py-3.5 rounded-lg font-semibold border-2 border-[#820024] transition-all duration-200 hover:bg-white hover:text-[#820024] shadow-sm hover:shadow-md"
                        >
                            Commencer
                        </a>
                    </div>
                </article>

                {/* Section Présentation / Mission */}
                <article className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 border border-gray-100">
                    <div className="w-full md:w-2/3">
                        <p className="text-base md:text-lg font-light text-gray-600 text-justify md:text-left leading-relaxed">
                            Plateforme intégrée de mise en relation logistique, <strong className="font-semibold text-gray-900">ABYDOZ</strong> connecte les expéditeurs, les transporteurs et les commissionnaires de transport. Notre solution digitale élimine les frictions, fluidifie vos échanges et optimise chaque étape de votre chaîne d'approvisionnement. Grâce à un écosystème interconnecté, nous maximisons votre rendement et réduisons vos coûts d'exploitation au quotidien.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                        <h3 className="text-lg font-bold text-[#820024] mb-2">Notre Mission</h3>
                        <p className="text-sm md:text-base text-gray-700">
                            Assurer la planification, la gestion globale de vos flux de marchandises et accélérer votre croissance dès aujourd'hui.
                        </p>
                    </div>
                </article>

                {/* Section Avantages Clés */}
                <article className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-100">
                    <div className="space-y-3">
                        <h4 className="text-xl font-bold text-[#820024]">Pour les Transporteurs</h4>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            Rentabilisez vos trajets à vide, trouvez des chargements compatibles en temps réel et sécurisez vos paiements directement sur la plateforme.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xl font-bold text-[#820024]">Pour les Expéditeurs</h4>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            Accédez à un réseau qualifié de véhicules, suivez vos expéditions en temps réel et réduisez vos coûts d'acheminement.
                        </p>
                    </div>
                </article>

            </div>
        </section>
    );
}

export default Vitrine;