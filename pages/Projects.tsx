import Filter from '@/components/projectComponents/Filter'
import ProjectHeading from '@/components/projectComponents/ProjectHeading'

const Projects = () => {
  return (
    <div className='mt-24 border-2 border-red-800'>
        <ProjectHeading/>
        <Filter/>
    </div>
  )
}

export default Projects