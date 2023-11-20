import { MongoClient } from "mongodb"
import Link from "next/link"
import Card from "./Card"
import H1 from "./H1"
import Description from "./Description"

// export const revalidate = 60

// async function getJobListings() {
//   const mongo = new MongoClient(process.env.MONGO_URI)
//   let jobListings = []
//   let companies = []

//   try {
//     await mongo.connect()
//     const client = mongo.db('VarialCMS')
    
//     const contentModels = await client.collection('content_models')
//     const contents = await client.collection('contents')
    
//     const companyModel = await contentModels.findOne({ 'name.plural': 'companies' })
//     await contents.find({ contentModel: companyModel._id }).forEach(company => companies.push(company))
    
//     const jobListingModel = await contentModels.findOne({ 'name.plural': 'job-listings' })
//     await contents.find({ contentModel: jobListingModel._id }).forEach(listing => jobListings.push(listing))

//     await jobListings.forEach(listing => {
//       let company = {}
      
//       companies.forEach(c => {
//         if (c._id.toString() === listing.fields.company) {
//           company = c
//         }
//       })

//       listing.fields = {
//         ...listing.fields,
//         company: { ...company }
//       }
//     })

//     await mongo.close()
    
//     return jobListings
//   } catch (error) {
//     console.error('Mongo Server error', error)
//   }

//   return {}
// }

async function getJobListings() {
  let jobListings = []

  await fetch(`${process.env.BASE_URL}/api/listings`, { next: { revalidate: 60 }})
  .then(response => response.json())
  .then(response => {
    if (response.error_message) return

    jobListings = response.jobListings
  })
  .catch(error => console.error(error))

  return jobListings
}

export default async function JobListingsPage() {
  const listings = await getJobListings()

  return (
    <main className="px-4 py-8 md:py-12 lg:py-16 flex flex-col gap-8 items-center w-screen max-w-[100vw] overflow-x-clip">
      <div className="flex flex-col gap-2">
        <H1 />
        <Description />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 flex-wrap justify-center items-center w-full max-w-[1600px]">
        {listings?.map(listing => (
          <Card key={listing._id} listing={listing} />
        ))}
      </div>
    </main>
  )
}