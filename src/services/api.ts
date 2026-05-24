
export const getInternships = async () => {
  const url = "https://internshala.com/hiring/search";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};