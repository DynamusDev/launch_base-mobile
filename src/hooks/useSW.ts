import { useQuery } from "react-query";
import { api } from "../services/api";
import reactotron from "reactotron-react-native";

const fetchPlanets = async () => {
  try {
    const { data } = await api.get("planets");
    return data.results;
  } catch (e) {
    reactotron.error("ERROR", e);
  }
};

const fetchPeople = async () => {
  try {
    const { data } = await api.get("people");
    return data.results;
  } catch (e) {
    reactotron.error("ERROR", e);
  }
};

export const usePlanets = () => useQuery("planets", fetchPlanets);

export const usePeople = () => useQuery("people", fetchPeople);
