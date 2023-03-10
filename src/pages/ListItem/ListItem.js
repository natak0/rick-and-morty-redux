import React from "react";
import { useParams } from "react-router";
import { Character } from "../../components/Character/Character";
import { useGetCharacterByIdQuery } from "../../services/rickMortyConnect";

const ListItem = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCharacterByIdQuery({
    characterId: id,
  });

  const renderItem = () => {
    if (isLoading) return <p>Loading item...</p>;
    if (error) return <p>Unable to display item.</p>;
    if (id && data) return <Character item={data.character} />;
  };

  return <section>{renderItem()}</section>;
};

export default ListItem;
