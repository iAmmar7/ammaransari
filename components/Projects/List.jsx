import { AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import { take } from '../../lib/utils';
import Card from './Card';

function List(props) {
  const { projects, count, className } = props;

  return (
    <ul className={clsx('grid grid-cols-6 gap-4 sm:gap-7', className)}>
      <AnimatePresence>
        {take(projects, count).map((proj) => {
          return (
            <Card
              key={proj.id}
              id={proj.id}
              name={proj.name}
              summary={proj.summary}
              image={proj.thumbnail}
              url={proj.url}
              code={proj.code}
              domain={proj.domain}
              tech={take(proj.technologies, 2)}
            />
          );
        })}
      </AnimatePresence>
    </ul>
  );
}

export default List;
