/** @format */

import React from "react";
import Rating from "@mui/material/Rating";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { schemasGql } from "@/gql";

type Props = {
  id: string;
  rating: number;
};

export default function RatingItem({ id, rating }: Props) {
  const [addRating] = useMutation(schemasGql.GET_RATE, {
    refetchQueries: [{ query: schemasGql.GET_PRODUCTS }],
  });

  const handleUpdateRating = (value: number | null) =>
    value &&
    addRating({ variables: { itemId: id, rate: value } })
      .then(() => toast.success("Rating updated"))
      .catch(() => toast.error("Error updating rating , please authenticate"));

  return (
    <div>
      <Rating
        sx={{ marginBottom: 1, marginLeft: 1 }}
        value={rating}
        onChange={(_, v) => handleUpdateRating(v)}
      />
    </div>
  );
}
