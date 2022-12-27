export default function Trabajos(){
    return(
        <article className="flex items-center border-b-2 py-6">
            <img className="w-1/3 mr-6 rounded-lg" src="https://via.placeholder.com/240" alt="imagen de articulo" />
            <div>
                <h3 className="text-2xl mb-2 font-medium">Titulo del trabajo</h3>
                <span className="text-gray-600 mb-4 block">
                    <date className="bg-blue-800 text-white px-5 py-1.5 mr-4 rounded-xl">2022</date> Tagname
                </span>
                <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
                </p>
            </div>
        </article>
    );
}