export default function ContactPage() {
  return (
    <main className="grid lg:grid-cols-2 place-items-center p-4 py-8 lg:py-16 gap-8 lg:gap-24 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 ">
        <img src="https://media.hirehiddentalent.com/images/contact-page-images/contact-page-image" alt="" />
        <p>
          We love helping people find the next step in their career or for their company. 
          Even if you find that you don't need our services, we are still here to offer guidance and direction, no matter what you decide to do next.
        </p>
      </div>
      <div className="flex flex-col w-full">
        <form
          className="bg-[#0a0a0a] p-4 lg:p-12 text-white rounded-[20px] grid gap-5 lg:gap-8 w-full"
        >
          <h1 className="text-3xl text-center">Let's Get <span className="text-hidden-teal-dark">Started</span></h1>
          <label htmlFor="name" className="grid gap-2 md:text-xl">
          Name
          <input 
            id="name" 
            name="name"
            placeholder="John Doe"
            required 
            className="rounded p-2 md:p-4 md:text-xl" 
          />
        </label>
        <label htmlFor="city" className="grid gap-2 md:text-xl">
          City & State
          <input 
            id="city" 
            name="city"
            required
            placeholder="Boise, ID" 
            className="rounded p-2 md:p-4 md:text-xl" 
          />
        </label>
        <label htmlFor="email" className="grid gap-2 md:text-xl">
          Email
          <input 
            type="email"
            id="email" 
            name="email"
            required
            placeholder="someone@somewhere.com" 
            className="rounded p-2 md:p-4 md:text-xl" 
          />
        </label>
        <label htmlFor="phone" className="grid gap-2 md:text-xl">
          Phone Number
          <input 
            id="phone" 
            name="phone"
            required
            placeholder="(555) 555-5555" 
            className="rounded p-2 md:p-4 md:text-xl" 
          />
        </label>
        <label htmlFor="inquiry" className="grid gap-2 md:text-xl">
          Inquiry
          <select
            id="inquiry"
            name="inquiry"
            className="rounded p-2 md:p-4 md:text-xl"
          >
            <option>I am seeking talent</option>
            <option>I am seeking positions</option>
          </select>
        </label>
        <label htmlFor="details" className="grid gap-2 md:text-xl">
          Inquiry Details
          <textarea
            id="details"
            name="details"
            className="rounded p-2 md:p-4 md:text-xl"
            rows="4"
          >
          </textarea>
        </label>
        <button className="md:text-xl mt-4 bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#03D8D4] hover:to-[hsl(179,97%,46%)] text-center rounded-full py-5 uppercase font-semibold text-lg  text-[#0a0a0a]">
          Start your search
        </button>
        </form>
      </div>
    </main>
  )
}