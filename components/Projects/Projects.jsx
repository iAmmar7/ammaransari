import Filters from './Filters';
import { useSkillFilter } from '../../hooks';

function Projects() {
  const { filters, updateFilters } = useSkillFilter();

  return (
    <div>
      <Filters filters={filters} updateFilters={updateFilters} />
    </div>
  );
}

export default Projects;
