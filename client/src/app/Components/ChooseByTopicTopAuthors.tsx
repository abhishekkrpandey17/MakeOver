import React from 'react'
import ChooseByTopic from './ChooseByTopic'
import TopAuthors from './TopAuthors'


const ChooseByTopicTopAuthors = () => {
  return (
    <div className="flex flex-wrap bg-[#dbc3eb]">
        <div className="lg:w-[96%] ml-2 lg:ml-15 mr-[-2vmin] mt-10">
          <ChooseByTopic/>
        
        </div>
        <div>
          <TopAuthors/>
        </div>
        
      </div>
  )
}

export default ChooseByTopicTopAuthors