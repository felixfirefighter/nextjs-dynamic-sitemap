const Sitemap = () => {
  return <></>;
};

export async function getServerSideProps({ res }) {
  // Get sitemap.xml from S3 bucket
  const response = await fetch(
    "https://felix-medium-bucket-1.s3.ap-southeast-1.amazonaws.com/medium-1/sitemap.xml"
  );
  const text = await response.text();
  res.setHeader("Content-Type", "text/xml");
  res.write(text);
  res.end();
  return {
    props: {},
  };
}
export default Sitemap;
