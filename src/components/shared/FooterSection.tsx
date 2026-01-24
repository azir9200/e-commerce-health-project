import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

// FooterSection.tsx
interface FooterSectionProps {
  data: { href?: string; title: string }[];
  title: string; // Title of the section
  className?: string; // className is optional
}

const FooterSection: React.FC<FooterSectionProps> = ({
  data,
  title,
  className,
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      <h4 className="text-lg font-semibold">{title}</h4>

      <ul className="space-y-2">
        {data.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link
                to={item.href}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                {item.title}
              </Link>
            ) : (
              <p className="text-sm text-gray-400">{item.title}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
