import Card from "./Card";
import H1 from "./H1";
import Description from "./Description";

export const dynamic = "force-dynamic";

async function getJobListings() {
  let companies = [];
  let jobListings = [];

  await fetch(
    `https://admin.hirehiddentalent.com/api/companies?populate=true`,
    { next: { revalidate: 60 } }
  )
    .then((response) => response.json())
    .then((response) => {
      companies = [...response];
    });

  await fetch(
    `https://admin.hirehiddentalent.com/api/job-listings?populate=true`,
    { next: { revalidate: 60 } }
  )
    .then((response) => response.json())
    .then(async (response) => {
      if (response.error_message) return;

      jobListings = [...response];
    })
    .catch((error) => console.error(error));

  jobListings.forEach((listing, index) => {
    jobListings[index].fields.company = companies.find(
      (company) => company._id === listing.fields.company
    );
  });

  return jobListings;
}

export default async function JobListingsPage() {
  const listings = await getJobListings();

  return (
    <main className="px-4 py-8 md:py-12 lg:py-16 flex flex-col gap-8 items-center w-screen max-w-[100vw] overflow-x-clip">
      <div className="flex flex-col gap-2">
        <H1 />
        <Description />
      </div>
      <div>
        <iframe
          style={{
            height: "900px",
            width: "900px",
            maxWidth: "90%",
            maxHeight: "90%",
            border: "none",
          }}
          src="https://recruitcrm.io/jobs/Hidden_Talent"
        ></iframe>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 flex-wrap justify-center items-center w-full max-w-[1600px]">
        {listings?.map((listing) => (
          <Card key={listing._id} listing={listing} />
        ))}
      </div>
    </main>
  );
}
