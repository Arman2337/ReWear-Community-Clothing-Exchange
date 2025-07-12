// src/api/landing.js
import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // Update if deployed

export const fetchFeaturedItems = async () => {
  const res = await axios.get(`${BASE_URL}/items/featured`);
  return res.data;
};

export const fetchLatestItems = async () => {
  const res = await axios.get(`${BASE_URL}/items/latest`);
  return res.data;
};

export const fetchCategories = async () => {
  const res = await axios.get(`${BASE_URL}/items/categories`);
  return res.data;
};
