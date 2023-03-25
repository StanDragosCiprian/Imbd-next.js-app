export const trending = async () => {
    const res = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=874416021e462f491082a13737e8a2b2");
    const data = await res.json();
   return data;
};
