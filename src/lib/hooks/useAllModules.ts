import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type { Module } from "../types";

const apiClient = new APIClient("/catalog");

const useAllModules = (initialModules: Module[], inView: boolean) => {
  const {
    data: allModules,
    isError,
    error,
    isLoading,
  } = useQuery(["allModules"], apiClient.getAll, {
    initialData: initialModules,
    enabled: inView,
  });

  return { allModules, isError, error, isLoading };
};

export default useAllModules;
