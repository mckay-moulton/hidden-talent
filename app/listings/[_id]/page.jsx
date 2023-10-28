
import RichText from "@/app/RichText"
import { MongoClient, ObjectId } from "mongodb"

async function getListing(_id) {
  const mongo = new MongoClient(process.env.MONGO_URI)

  let jobListing = {}
  let companies = []
  let company = {}

  try {
    await mongo.connect()
    const client = mongo.db('VarialCMS')

    const contentModels = await client.collection('content_models')
    const companyModel = await contentModels.findOne({ 'name.plural': 'companies' })
    // const jobListingModel = await contentModels.findOne({ 'name.plural': 'job-listings' })
    jobListing = await client.collection('contents').findOne({ _id: new ObjectId(_id) })
    company = await client.collection('contents').findOne({ _id: new ObjectId(jobListing.fields.company) })

    jobListing.fields.company = company

    await mongo.close()
  } catch(error) {
    console.error('Mongo Error', error)
  }

  
  return jobListing
}


export default async function ListingPage({ params }) {
  const listing = await getListing(params._id)

  return (
    <main className="px-4 py-8 flex flex-col items-center">
      <img src={listing.fields.company.fields.logo.url} alt="" width="150" />
      <h1 className="text-[44px] md:text-[48px] leading-tight text-center">{listing.fields.jobTitle}</h1>
      <div className="flex flex-wrap justify-center gap-y-12 lg:justify-between items-end w-full max-w-2xl mx-auto p-8 mt-4">
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src="/building.svg" alt="" className="h-[32px] w-auto" />{listing.fields.company.fields.name}</p>
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src="/maps-and-flags.svg" alt="" className="h-[28px] w-auto" />{listing.fields.location}</p>
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src={listing.fields.jobType === 'Full-time' ? '/full-time.svg' : '/part-time.svg'} alt="" className="h-[32px] w-auto" />{listing.fields.jobType}</p>
        <p className="flex flex-col gap-2 items-center justify-between w-1/2 lg:w-fit"><img src="/money.svg" alt="" className="h-[32px] w-auto" />${listing.fields.compensation}</p>
      </div>
      <RichText src={listing.fields.jobAnnouncement} className="flex flex-col gap-2 items-start max-w-2xl mx-auto" /> 
    </main>
  )
}