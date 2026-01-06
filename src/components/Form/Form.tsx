import { Select } from "@/components/base/select/select";
import { SelectItem } from "../base/select/select-item";
import { Button } from "@/components/base/buttons/button";
import { TextArea } from "@/components/base/textarea/textarea";

function Form() {
    const items = [
        { label: 'Frontend Developer', id: 'frontend'},
        { label: 'Backend Developer', id: 'backend'},
        { label: 'Fullstack Developer', id: 'fullstack'},
        { label: 'Mobile Developer', id: 'mobile'},
        { label: 'Experto en Ciberseguridad', id: 'ciberseguridad'},
        { label: 'Cloud Engineer / DevOps', id: 'devops'},
        { label: 'Data Scientist / Analista de Datos', id: 'analista'},
        { label: 'QA Tester', id: 'qa'},
        { label: 'Growth Hacker', id: 'growth'},
        { label: 'SEO Specialist', id: 'seo'},
        { label: 'Trafficker Digital / Media Buyer', id: 'media buyer'},
        { label: 'Community Manager', id: 'community manager'},
        { label: 'Copywriter', id: 'copywriter'},
        { label: 'E-commerce Manager', id: 'ecommerce manager'},
        { label: 'Diseñador UX/UI', id: 'designer ux ui'},
        { label: 'Diseñador Gráfico Digital', id: 'graphic designer'},
        { label: 'Editor de Video / Motion Graphics', id: 'editor de video'},
        { label: 'Animador 3D', id: 'animador 3d'},
        { label: 'Ilustrador Digital', id: 'ilustrador'},
        { label: 'Asistente Virtual', id: 'asistente'},
        { label: 'Project Manager', id: 'project manager'},
        { label: 'Customer Success / Soporte', id: 'soporte'},
        { label: 'IT Recruiter', id: 'it recruiter'},
    ]
    return (
        <section className="flex flex-col w-full max-w-4xl bg-white p-4 rounded-xl border-2 border-gray-300 max-w-xl">
            <h2 className="text-center font-extrabold text-slate-800 text-xl">Llena el formulario y optén tu CV optimizado</h2>
            <Select
                isRequired
                label="Tu profesión"
                placeholder="Frontend Developer"
                tooltip="Elije la profesión que consideres que más se acerca a tu día a día o al trabajo que estás aplicando."
                items={items}
                className="mt-4"
                >
                {items.map((item) => (
                    <SelectItem
                    key={item.id} 
                    id={item.id} 

                    >
                    {item.label}
                    </SelectItem>
                ))}
            </Select>
            <TextArea isRequired placeholder="Estamos buscando un desarrollador web que..." label="Descripción del trabajo" rows={5} className="mt-4"/>
            <Button color="primary" size="md" className="mt-4">Optimiza mi CV</Button>
        </section>
    )
}
export { Form }