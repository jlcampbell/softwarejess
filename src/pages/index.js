import Head from 'next/head'

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Jessica Campbell</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" container mx-auto flex flex-col justify-center items-center height-90 p-8" >
        <h1 className=" font-sans text-6xl  text-center">
          Jessica Campbell
        </h1>

        <section className="mb-16">
          Software Engineer
        </section>

        {/* <section className="mb-8">
          articles
        </section>

        <section className="mb-8">
          github
        </section> */}

        

       


      </main>

      {/* <footer className="flex height-10 items-center justify-around">
      <a className="block object-center">twitter</a>
          <a className="block object-center">linkedIn</a>
      </footer> */}
    </div>
  )
}
