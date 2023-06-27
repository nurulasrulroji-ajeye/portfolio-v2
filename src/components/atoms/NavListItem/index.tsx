const listData = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'service', label: 'Service' },
  { id: 'portfolio', label: 'Portfolio' },
];

export const NavListItem = () => {
  return (
    <ul className="flex flex-col gap-4 md:flex-row md:gap-5">
      {listData.map((item, idx) => (
        <li
          key={idx}
          className="text-3xl font-bold font-primary border-b border-black py-3 md:border-none md:text-xl md:font-normal md:text-dark-secondary md:cursor-pointer md:hover:bg-yellow-color md:hover:text-dark-primary md:py-1 md:px-4 md:rounded-full md:transition-all md:duration-300 md:ease-in-out md:hover:shadow-[2px_2px_rgba(0,0,0,0.5)]"
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
