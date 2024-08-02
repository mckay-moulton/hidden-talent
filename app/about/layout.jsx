import Head from "next/head";

export const metadata = {
  title: "Who We Are",
  description:
    "At Hidden Talent, our mission is to help our clients discover and connect talented people to engaging and rewarding work by creating a white-glove experience through honesty, humility, and empathy. We seek to inspire a positive change in all things hiring and are actively working to make a positive impact within the industry. We know what we do affects people's lives and we don't take it for granted.",
};

export default function AboutLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      {children}
    </>
  );
}
