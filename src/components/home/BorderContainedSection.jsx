

export const BorderContainedSection = ({ className="", sectionTitle, borderTop=true, children }) => {

  return (
    <section 
      className={`${className}${sectionTitle ? " titled" : ""}`}
    >
      <div className="border-section-wrapper">
        <div className="border-container">
            {sectionTitle && (
              <h2 className="title-upright">{ sectionTitle }</h2>
            )}
          <div style={{ padding: "0px 20px" }}>
            { children }
          </div>
        </div>
      </div>
    </section>
  )
}