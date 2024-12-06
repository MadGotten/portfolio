import TechItem from "@/components/tech-item";

type TechCategoryProps = {
  title: string;
  items: (
    | { Icon: React.ComponentType; name: string }
    | { Icon: React.ComponentType; name: string }[]
  )[];
  row?: boolean;
};

const TechCategory = ({ title, items, row = false }: TechCategoryProps) => {
  return (
    <div className="flex flex-col justify-start gap-2">
      <h4 className="md:text-2xl text-2xl font-semibold">{title}</h4>
      <div
        className={
          row
            ? "grid grid-cols-1 gap-2 xs:grid-cols-2 sm:col-span-2"
            : "grid sm:grid-cols-3 grid-cols-1 gap-2"
        }
      >
        {items.map((item, index) => {
          if (Array.isArray(item)) {
            return row ? (
              item.map((nextItem, nextIndex) => (
                <TechItem key={nextIndex} Icon={nextItem.Icon} name={nextItem.name} />
              ))
            ) : (
              <div key={index} className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:col-span-2">
                {item.map((nextItem, nextIndex) => (
                  <TechItem key={nextIndex} Icon={nextItem.Icon} name={nextItem.name} />
                ))}
              </div>
            );
          }

          return <TechItem key={index} Icon={item.Icon} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default TechCategory;
