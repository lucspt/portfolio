import src from "../../assets/mongoDB-logo.svg";

export const MongoDBLogo = ({ width="100%", height="100%" }) => {
  return (
    <span className="tool">
      <img src={src} style={{ width, height }} />
    </span>
  )
}