export default function SearchUI({ style},props ) {
  console.log(style)
  return (
    <div className={style.searchMovie}>
      <ol>
        {props.children}
      </ol>
    </div>
  )
}
