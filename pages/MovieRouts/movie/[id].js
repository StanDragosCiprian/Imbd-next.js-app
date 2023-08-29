import { requestApi } from '@/pages/apiRequest';
import { useState, useEffect } from 'react';
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

  console.log("🚀 ~ file: [id].js:24 ~ getStaticProps ~ search:", search)
  return {
    // Passed to the page component as props

    props: {
      search
    },
  }
}

export default function movie({ search }) {
  const [searchRequst] = useState(search.results[0])
  const [info] = useState([searchRequst.title, searchRequst.release_date, searchRequst.overview, searchRequst.popularity, searchRequst.vote_average, searchRequst.vote_count])
  const [mediaStyleArray] = useState([mediaStyle.textDesign_1, mediaStyle.textDesign_2, mediaStyle.textDesign_3])



  return (
    <>
      <div style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,0,0,0.0), rgba(0,0,255,0.0)), url(https://image.tmdb.org/t/p/w500/${searchRequst.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',

      }} className={mediaStyle.containter}>

        {
          info.map((inf, index) => (
            <>
              <p className={mediaStyleArray[index]}>{inf}</p>

            </>
          ))
        }

        < img src={`https://image.tmdb.org/t/p/w500/${searchRequst.poster_path}`} alt="ceva" className={mediaStyle.poster} />
        {/* <div className='fron-ground'> */}

        {/* <img src={`https://image.tmdb.org/t/p/w500/${searchRequst.backdrop_path}`} alt="ceva" className={mediaStyle.co} /> */}
        
      </div >
      
    </>
  )
}
