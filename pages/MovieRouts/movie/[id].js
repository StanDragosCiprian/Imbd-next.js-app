import { requestApi } from '@/pages/apiRequest';
import { useRouter } from 'next/router'

export async function getStaticPaths() {

  const trendingDateDay = await requestApi(
    "https://api.themoviedb.org/3/trending/all/day?api_key=874416021e462f491082a13737e8a2b2"
  );
  const userRequest = await requestApi(
    "http://localhost:3000/api/userFile"
  );
  userRequest.forEach(element => {
    console.log(element.title)
  });
  
  const paths=userRequest.map(trend=>{
    return {
     params: { id: `${trend.title}` } ,
   // fallback: false, // can also be true or 'blocking'
  }})
  return{
    paths,
    fallback: false
  }
}
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}

export default function movie() {
  const router = useRouter()
  const z = router.query.id
  console.log(z);

  return (
    <div>{z}</div>
  )
}
