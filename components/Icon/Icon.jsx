function Icon(props) {
  const { color = 'primary', className = '', icon } = props;

  if (!icon) return null;

  return <i className={`${icon} text-${color} opacity-100 text-2xl sm:text-base `.concat(className)} />;
}

export default Icon;
