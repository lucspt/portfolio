

export const BorderContainedSection = ({ className="", sectionTitle, padded=true, children }) => {

  return (
    <section 
      className={`${className}${sectionTitle ? " titled" : ""}`}
    >
      <div className="border-section-wrapper">
        <div className="border-container">
            {sectionTitle && (
              <h2 className="title-upright">{ sectionTitle }</h2>
            )}
          <div style={{ padding: padded ? "0px 24px" : "0px" }}>
            { children }
          </div>
        </div>
      </div>
    </section>
  )
}