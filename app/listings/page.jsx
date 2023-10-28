import { MongoClient } from "mongodb"
import Link from "next/link"


async function getJobListings() {
  const mongo = new MongoClient(process.env.MONGO_URI)
  let jobListings = []
  let companies = []

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')
    
    const contentModels = await client.collection('content_models')
    const contents = await client.collection('contents')
    
    const companyModel = await contentModels.findOne({ 'name.plural': 'companies' })
    await contents.find({ contentModel: companyModel._id }).forEach(company => companies.push(company))
    
    const jobListingModel = await contentModels.findOne({ 'name.plural': 'job-listings' })
    await contents.find({ contentModel: jobListingModel._id }).forEach(listing => jobListings.push(listing))

    await jobListings.forEach(listing => {
      let company = {}
      
      companies.forEach(c => {
        if (c._id.toString() === listing.fields.company) {
          company = c
        }
      })

      listing.fields = {
        ...listing.fields,
        company: { ...company }
      }
    })

    await mongo.close()
    
    return jobListings
  } catch (error) {
    console.error('Mongo Server error', error)
  }

  return {}
}

export default async function JobListingsPage() {
  const listings = await getJobListings()


  function Card({ listing }) {
    return (
      <div className="w-full p-6 border border-hidden-teal rounded-[20px] flex flex-col gap-8 items-center text-xl max-w-md">
        <div className="flex justify-center gap-8 items-center">
          <img src={listing.fields.company.fields.logo.url} alt="" width="108" />
          <div className="flex flex-col justify-evenly h-full">
            <span className="flex items-center gap-2"><img src="building.svg" alt="" width="28" className="" />{listing.fields.company.fields.name}</span>
            <span className="flex items-center gap-2 leading-none"><img src="maps-and-flags.svg" alt="" width="28" className="" />{listing.fields.location}</span>
          </div>
        </div>
        <hr className="border-0.5 border-hidden-teal w-full opacity-50" />
        <h2 className="text-2xl md:text-[29px] text-center leading-tight">{listing.fields.jobTitle}</h2>
        <div className="flex justify-evenly w-full">
          <p className="flex items-center gap-2"><img src={listing.fields.jobType === 'Full-time' ? 'full-time.svg' : 'part-time.svg'} alt="" width="28" />{listing.fields.jobType}</p>
          <p className="flex items-center gap-2"><img src="money.svg" alt="" width="32" />${listing.fields.compensation}</p>
        </div>
        <Link
          href={`/listings/${listing._id}`}
          className="bg-gradient-to-b from-[#11B0AC] to-[#03D8D4] hover:from-[#ffffff] hover:to-[#ffffff] hover:text-hidden-teal border border-[#fff] hover:border-hidden-teal text-center rounded-full py-4 mt-2 uppercase font-semibold text-base text-white px-12 w-full"
        >
         Learn More
        </Link>
      </div>
    )
  }
  return (
    <main className="px-4 py-8 md:py-12 lg:py-16 flex flex-col gap-8 items-center">
      <h1 className="text-[29px] md:text-[42px] text-center"><span className="text-hidden-teal">Explore</span> New Opportunities</h1>
      {listings.map(listing => (
        <Card key={listing._id} listing={listing} />
      ))}
    </main>
  )
}