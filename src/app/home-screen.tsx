import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/Form/Form"

export const HomeScreen = () => {
    return (
        <main className="flex justify-center items-center gap py-8 bg-zinc-100 min-h-screen">
        <section className="flex justify-center items-center gap-8 max-w-6xl">
          <section className="flex gap-4 flex-col">
          <h1 className="text-4xl font-extrabold mt-10 max-w-2xl text-slate-700">Mejora tu CV con IA en segundos y completamente gratis</h1>
          <p className="text-slate-500 max-w-2xl text-md">Utiliza el poder de la IA para optimizar tu CV para la solicitud de trabajo que estés aplicando. Evita ser descartado automaticamente por filtros de ATS y encuentra tu trabajo soñado.</p>
        </section>
        <Form />
      </section>
    </main>
    );
};
