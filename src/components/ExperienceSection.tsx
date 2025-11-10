export const ExperienceSection = () => {
  const companies = [
    { name: "ROBLOX", logo: "ROBLOX" },
    { name: "SoFi", logo: "SoFi ⚡" },
    { name: "Cornell", logo: "Cornell Medical University\nSoftware Engineering Institute" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-lg font-medium text-muted-foreground mb-12">
          Previously crafting experiences at
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="text-muted-foreground text-lg font-medium whitespace-pre-line"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};