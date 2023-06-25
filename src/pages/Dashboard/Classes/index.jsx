import { useState } from "react";

export default function Classes() {
  const [click, setClick] = useState(false);

  const [form, setForm] = useState({
    sigla: "",
    quantity: "",
  });
  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [data, setData] = useState([
    { sigla: "teste", quantity: 40 },
    { sigla: "9ano A", quantity: 39 },
    { sigla: "teste", quantity: 40 },
    { sigla: "9ano A", quantity: 39 },
    { sigla: "teste", quantity: 40 },
    { sigla: "9ano A", quantity: 39 },
    { sigla: "teste", quantity: 40 },
    { sigla: "9ano A", quantity: 39 },
    { sigla: "teste", quantity: 40 },
    { sigla: "9ano A", quantity: 39 },
    { sigla: "teste", quantity: 40 },
    { sigla: "9ano A", quantity: 39 },
    { sigla: "teste", quantity: 40 },
    { sigla: "9ano A", quantity: 39 },
    { sigla: "teste", quantity: 40 },
    { sigla: "9ano A", quantity: 39 },
  ]);

  function createClassroom(e) {
    e.preventDefault();

    setData([...data, form]);
    setForm({ sigla: "", quantity: "" });
    setClick(false);
  }

  function CreateForm() {
    return (
      <div className="absolute w-96 h-fit top-72 left-1/2 rounded-xl bg-gray-600 p-2">
        <h1 className="text-center font-bold text-xl text-white my-5">
          Formulário de Turma
        </h1>
        <form className="mt-8 flex flex-col gap-8" onSubmit={createClassroom}>
          <input
            className="w-full h-10 rounded-3xl px-5"
            placeholder="Sigla da Turma"
            type="text"
            name="sigla"
            value={form.sigla}
            onChange={handleForm}
            required
          />
          <input
            className="w-full h-10 rounded-3xl px-5"
            placeholder="Quantidade de Alunos"
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleForm}
            required
          />
          <button
            type="submit"
            className="bg-gray-400 h-10 rounded-3xl text-white font-bold hover:bg-gray-500 mb-5"
          >
            Criar turma
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <button
        type="button"
        class="absolute right-14 top-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => setClick(!click)}
      >
        Criar Turma
      </button>
      {click && <CreateForm />}
      <div className="w-full h-full flex justify-center flex-wrap gap-5 pt-10 px-5 bg-purple-600 overflow-scroll">
        {data &&
          data.map((el) => (
            <div className="w-52 h-60 bg-gray-500 rounded-xl overflow-hidden">
              <section className="h-1/2 w-full bg-blue-300">{el.sigla}</section>
            </div>
          ))}
      </div>
    </div>
  );
}
