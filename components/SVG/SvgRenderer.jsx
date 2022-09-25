import clsx from 'clsx';

const SvgRenderer = (Component, fill = true) => {
  return function SvgRendererHoC({ className, ...otherProps }) {
    return (
      <span className={clsx(className, fill ? 'fill' : 'stroke')}>
        <Component {...otherProps} />
      </span>
    );
  };
};

export default SvgRenderer;
