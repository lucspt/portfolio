

export const FullWidthSection = ({ className="", title, containWidth, bordered=true, children }) => {

  return (
    <section className={`section-full-width ${className}${bordered ? " bordered" : ""}`}>
      <div className="border-section-wrapper">
        <div className="contained-width content">
          { title && <h2 className="title-upright">{ title }</h2> }
          { children }
        </div>
      </div>
    </section>
  )
}