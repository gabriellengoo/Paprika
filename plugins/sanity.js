import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ud97g06g",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
