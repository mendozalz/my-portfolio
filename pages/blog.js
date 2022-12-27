import Head from "next/head";
import { Article } from "../components/Article";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>NextJS Blog</title>
        <meta name="desciption" content="Generado por next created" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 p-4">Blog</h1>
          <Article className='border-b-2'/>
          <Article className='border-b-2'/>
          <Article className='border-b-2'/>
          <Article className='border-b-2'/>
        </div>
      </section>
    </div>
  );
}
