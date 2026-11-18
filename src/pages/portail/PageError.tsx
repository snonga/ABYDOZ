function PageError() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
                <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">
                            Une erreur s'est produite
                        </h1>
                        <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                            Désolé, une erreur s'est produite lors du chargement de la page. Veuillez réessayer plus tard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageError;