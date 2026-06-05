import { useEffect, useState } from "react";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ").slice(0, 3).join(" ");
    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=white&json=true`,
    )
      .then((res) => res.json())
      .then((data) => {
        const { id } = data;
        const url = `https://cataas.com/cat/${id}/says/${threeFirstWords}`;
        setImageUrl(url);
        console.log(data);
      });
  }, [fact]);

  return { imageUrl };
}
