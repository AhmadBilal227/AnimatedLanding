import GooeyNav from './GooeyNav';

const GooeyNavFooter = () => {
  const items = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Dribbble", href: "#" },
  ];

  return (
    <div style={{ height: '200px', position: 'relative' }}>
      <GooeyNav
        items={items}
        particleCount={10}
        particleDistances={[60, 8]}
        particleR={80}
        initialActiveIndex={0}
        animationTime={500}
        timeVariance={200}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
};

export default GooeyNavFooter;
