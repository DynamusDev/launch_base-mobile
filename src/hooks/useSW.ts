import { useQuery } from "react-query";
import { api } from "../services/api";
import reactotron from "reactotron-react-native";

const fetchPlanets = async (page: number) => {
  try {
    const { data } = await api.get(`planets?page=${page ?? 1}`);
    const planets = data.results;
    const numberOfPages = data.count / planets.length;

    const result = {
      planets,
      numberOfPages,
    };
    return result;
  } catch (e) {
    reactotron.error("ERROR", e);
  }
};

const fetchPeople = async (page: number) => {
  try {
    const { data } = await api.get(`people?page=${page ?? 1}`);
    const people = data.results;
    const numberOfPages = data.count / people.length;

    const result = {
      people,
      numberOfPages,
    };
    return result;
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
