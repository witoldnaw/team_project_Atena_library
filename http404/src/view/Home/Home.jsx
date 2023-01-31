import { useState } from "react";
import Filtration from "../../components/Filtration/Filtration";
import HeroContent from "./HeroContent/HeroContent";
import ListBooks from "./ListBooks/ListBooks";

const Home = () => {
  const [selectedGenres, setSelectedGenres] = useState(["Kryminał"]);

  return (
    <>
      <HeroContent />
      <Filtration />
      <ListBooks selectedGenres={selectedGenres} />
    </>
  );
};

export default Home;
