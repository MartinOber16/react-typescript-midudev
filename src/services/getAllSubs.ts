import { Sub, SubsResponseFromApi } from "../types";
import axios from "axios";

const fetchSubs = () => {
  // return fetch('http://localhost:3001/subs').then(res => res.json())
  return axios
    .get<SubsResponseFromApi>("http://localhost:3001/subs")
    .then((response) => response.data);
};

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
  return apiResponse.map((subFromApi) => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description,
    } = subFromApi;

    return {
      nick,
      description,
      avatar,
      subMonths,
    };
  });
};

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApiToSubs);
};
