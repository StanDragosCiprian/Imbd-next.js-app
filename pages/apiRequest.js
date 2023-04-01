export const requestApi = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
   return data;
};

//https://api.themoviedb.org/3/trending/all/day?api_key=874416021e462f491082a13737e8a2b2