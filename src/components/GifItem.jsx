/* eslint-disable react/prop-types */


// eslint-disable-next-line no-unused-vars
export const GifItem = ( {title, url, id}) => {


  return (
    <div className="card">
        
        <img src={ url } alt={ title } />
        <p>{ title }</p>
        
    </div>
  )
}
