export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "6611b2db01msh8dbbbc1e4233aa1p1a40e5jsn08c84193580c",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}
