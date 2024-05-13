import imageSrc from "../../vectors/mongoDB-logo.svg";

export const MongoDBLogo = ({ width, height }) => {
  return (
    <span className="tool">
      <img src={imageSrc} style={{ width, height }} />
    </span>
  )
}