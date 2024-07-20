const apiKey = '45022873-80f77178c96ea8fdbff7ba9f5';

export function findImg(query, image_type = 'photo', orientation = 'horizontal', safesearch = true) {
  return fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}