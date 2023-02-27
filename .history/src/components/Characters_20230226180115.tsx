import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "./library/visual/Card";
import "./library/Characters.css";
type Character = {
  id: string;
  name: string;
  image: string;
};

type CharactersData = {
  characters: {
    info: {
      count: number;
    };
    results: Character[];
  };
};

type CharactersProps = {
  initialPage?: number;
  pageSize?: number;
};

const CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        species
        name
        image
      }
    }
  }
`;

const Characters = ({ initialPage = 1 }: CharactersProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [page, setPage] = useState(initialPage);
  const { loading, error, data } = useQuery<CharactersData>(CHARACTERS_QUERY, {
    variables: { page: page },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const characters = data?.characters?.results || [];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = characters.slice(indexOfFirstPost, indexOfLastPost) 

  const handleShowMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  return (
    <>
    
      <div className="cardsContainer">
        {currentPosts.map((character) => (
          <Card
            key={character.id}
            title={character.name}
            subtitle={character.species +" id: "+character.id}
            image={character.image}
          />
        ))}
      </div>
      {characters.length > pageSize && (
        <div className="showMoreButtonContainer">
          <button onClick={handleShowMore}>Load more</button>
        </div>
      )}
    </>
  );
};

export default Characters;
