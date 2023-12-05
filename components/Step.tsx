export default function Step({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <input type="checkbox" id={title} />
      <label htmlFor={title}>{title}</label>
      <div>{children}</div>
    </li>
  );
}
