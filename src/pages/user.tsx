/** @format */

import React from "react";
import { schemasGql } from "@/gql";
import { useMutation, useQuery } from "@apollo/client";
import { filterRes } from "@/helpers/filterRes";
import { toast } from "react-toastify";
import UpdateUser from "@/modules/user";
import Loader from "@/UI/loader";
import { uploadImgToStorage } from "@/services/fetch";

import type { User } from "@/types";

export default function User() {
  const { data, loading } = useQuery(schemasGql.GET_USER);

  const [updateUser] = useMutation(schemasGql.UPDATE_USER);

  const handleUpdateUser = async (form: User, file: any | undefined) => {
    const avatarURL = file ? await uploadImgToStorage(file) : undefined;

    updateUser({ variables: { user: { ...form, avatarURL } } })
      .then(() => {
        toast.success("Success update");
      })
      .catch(() => toast.error("Error update user"));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <UpdateUser
          data={filterRes(data?.getUser)}
          updateUser={handleUpdateUser}
        />
      )}
    </>
  );
}
