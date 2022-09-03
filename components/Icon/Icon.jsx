function Icon(props) {
  const { color = 'primary', className = '', icon } = props;

  if (!icon) return null;

  return <i className={`${icon} text-inherit text-${color} opacity-100 `.concat(className)} />;
}

export default Icon;
