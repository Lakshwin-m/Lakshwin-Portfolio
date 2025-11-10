interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  href,
}: ProjectCardProps) => {
  return (
    <div className="project-card group cursor-pointer">
      <a href={href} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-medium mb-3 group-hover:text-accent-foreground transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </a>
    </div>
  );
};
