import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "1bmty4m79gzo",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const FetchContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "project" });
      const fetchedProjects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        return {
          title,
          url,
          image: image?.fields?.file?.url,
          id: item.sys.id,
        };
      });
      setProjects(fetchedProjects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects, isLoading };
};
