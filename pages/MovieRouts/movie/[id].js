import { requestApi } from '@/pages/apiRequest';
import { useState } from 'react';

import mediaStyle from 'E:/imbd-app/styles/SASS/MediaPageDesign/mediaPageDesign.module.scss';
export async function getStaticPaths() {

  const userRequest = await requestApi(
    "http://localhost:3000/api/userFile"
  );
  const paths = userRequest.map(trend => {
    return {
      params: { id: `${trend.title}` },
      // fallback: false, // can also be true or 'blocking'
    }
  })
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps(context) {

  const search = await requestApi(`https://api.themoviedb.org/3/search/multi?api_key=874416021e462f491082a13737e8a2b2&language=en-US&query=${context.params.id}&page=1&include_adult=false`)

  return {
    // Passed to the page component as props

    props: {
      search
    },
  }
}

export default function movie({ search }) {
  const [searchRequst, setSearchRequst] = useState(search.results[0])
  const [info, setInfo] = useState([searchRequst.title, searchRequst.release_date, searchRequst.overview, searchRequst.popularity, searchRequst.vote_average, searchRequst.vote_count])
  const [mediaStyleArray, setMediaStyleV] = useState([mediaStyle.textDesign_0,mediaStyle.textDesign_1,mediaStyle.textDesign_2,mediaStyle.textDesign_3,mediaStyle.textDesign_4,mediaStyle.textDesign_5])

  //console.log(searchRequst)

  //console.log(match); // "X"
  //console.log(style)
   console.log(mediaStyleArray)
  return (

    <div className={mediaStyle.containter}>
       {info.map((inf, index) => (
        <>
          <p className={mediaStyleArray[index]}>{inf}</p>

        </>
      ))}
      <img src={`https://image.tmdb.org/t/p/w500/${searchRequst.poster_path}`} alt="ceva" className={mediaStyle.poster} />
      {/* <div className='fron-ground'> */}
      <img src={`https://image.tmdb.org/t/p/w500/${searchRequst.backdrop_path}`} alt="ceva" className={mediaStyle.banner} />
      {/* </div> */}
     

    </div>
  )
}
