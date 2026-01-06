function Form() {
    return (
        <section className="flex flex-col w-full max-w-4xl bg-white p-4 rounded-xl border-2 border-gray-300 max-w-xl">
            <h2 className="text-center font-extrabold text-slate-800 text-xl">Llena el formulario y optén tu CV optimizado</h2>
            <select name="job" id="job" className="h-10 border-1 rounded-full px-4 my-4 font-medium" >
                <option value="">Elige tu profesión</option>
                <option value="">Frontend Developer</option>
                <option value="">Backend Developer</option>
                <option value="">Fullstack Developer</option>
                <option value="">Mobile Developer</option>
                <option value="">Experto en Ciberseguridad</option>
                <option value="">Cloud Engineer / DevOps</option>
                <option value="">Analista de Datos</option>
                <option value="">QA Tester</option>
                
                <option value="">Backend Developer</option>
                <option value="">Backend Developer</option>
                <option value="">Backend Developer</option>
                <option value="">Backend Developer</option>
                <option value="">Backend Developer</option>
                <option value="">Backend Developer</option>
                <option value="">Backend Developer</option>
                <option value="">Backend Developer</option>

            </select>
            <section>
                <textarea name="jobDescription" id="jobDescription" className="bg-gray-200 rounded-md border-2 border-gray-400 w-full inline-block p-4" rows={8}/>
            </section>
            <section>
                <label htmlFor="" className="text-sm text-gray-800"></label>
            </section>
        </section>
    )
}
export { Form }