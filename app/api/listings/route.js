import { MongoClient } from "mongodb"

export async function GET() {
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
    
    return Response.json({ jobListings })
  } catch (error) {
    console.error('Mongo Server error', error)
    return Response.json({ error_message: 'Server error' })
  }

  return Response.json({ jobListings })
}