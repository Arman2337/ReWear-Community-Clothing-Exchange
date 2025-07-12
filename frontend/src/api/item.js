// src/api/item.js
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/items"; // update if hosted elsewhere

// Get all approved items
export const fetchApprovedItems = () => {
  return axios.get(`${BASE_URL}?status=approved`);
};

// Get all items (for admin)
export const fetchAllItems = () => {
  return axios.get(`${BASE_URL}`);
};

// Get single item by ID
export const fetchItemById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

// Update item status (approve, reject, etc.)
export const updateItemStatus = (id, status) => {
  return axios.put(`${BASE_URL}/${id}/status`, { status });
};

// Get current user's listings
export const fetchUserItems = (token) => {
  return axios.get(`${BASE_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
