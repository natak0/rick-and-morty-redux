import React from "react";
import { useParams } from "react-router";
import { Character } from "../../components/Character/Character";
import { useGetByCharacterQuery } from "../../slices/rickMortyConnect";

const ListItem = ({ match }) => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetByCharacterQuery(id);
  console.log(id, data);

  const renderItem = () => {
    if (isLoading) return <p>Loading item...</p>;
    if (error) return <p>Unable to display item.</p>;

    if (id && data) return <Character item={data.character} />;
  };

  return <section>{renderItem()}</section>;
};

export default ListItem;