import { useState } from "react";
import Filtration from "../../components/Filtration/Filtration";
import HeroContent from "./HeroContent/HeroContent";
import ListBooks from "./ListBooks/ListBooks";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState({
    name: "Wszystkie",
    id : "allGenres"
  });

  return (
    <>
      <HeroContent />
      <Filtration />
      <ListBooks selectedGenre={selectedGenre} />
    </>
  );
};

export default Home;
