import { useQuery } from "react-query";
import { api } from "../services/api";
import reactotron from "reactotron-react-native";

const fetchPlanets = async (page: number) => {
  try {
    const { data } = await api.get(`planets?page=${page ?? 1}`);
    return data.results;
  } catch (e) {
    reactotron.error("ERROR", e);
  }
};

const fetchPeople = async (page: number) => {
  try {
    const { data } = await api.get(`people?page=${page ?? 1}`);
    return data.results;
  } catch (e) {
    reactotron.error("ERROR", e);
  }
};

export const usePlanets = (page: number) =>
  useQuery(["planets", page], async () => fetchPlanets(page), {
    keepPreviousData: true,
  });

export const usePeople = (page: number) =>
  useQuery(["people", page], async () => fetchPeople(page), {
    keepPreviousData: true,
  });
