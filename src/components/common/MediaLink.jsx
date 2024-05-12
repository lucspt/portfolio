export const MediaLink = ({ to, children }) => {
  
  return (
    <span className="media-link">
      <a href={to} target="_blank"/>
      { children }
    </span>
  )
}