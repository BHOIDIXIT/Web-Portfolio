export default function ExperienceCard({
  company,
  role,
  duration,
  description,
  logo,
}) {
  return (
    <>
      <div className="experience-card text-white mt-10">
        <div className="experience-card-top   flex  justify-between ">
          <div className="experience-company">
            <div className="mb-5 flex gap-4">
             <img src={logo} alt={company}  className="w-10 h-10 " srcset="" />
              <h1 className="font-[1000] text-xl md:text-2xl lg:text-3xl ">
                {role}{" "}
              </h1>
            </div>
          </div>
          <span>{duration}</span>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
}
