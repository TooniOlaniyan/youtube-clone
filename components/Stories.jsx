import React from 'react'
import StoryCard from './StoryCard'

function Stories() {
        const stories = [
          {
            name: 'Tooni Olaniyan',
            src: 'https://links.papareact.com/zof',
            profile: 'https://links.papareact.com/l4v',
          },
          {
            name: 'Elon Musk',
            src: 'https://links.papareact.com/zof',
            profile: 'https://links.papareact.com/l4v',
          },
          {
            name: 'Doja Cat',
            src: 'https://links.papareact.com/zof',
            profile: 'https://links.papareact.com/l4v',
          },
          {
            name: 'Tywin Lanister',
            src: 'https://links.papareact.com/zof',
            profile: 'https://links.papareact.com/l4v',
          },
          {
            name: 'Amond Targaryn',
            src: 'https://links.papareact.com/zof',
            profile: 'https://links.papareact.com/l4v',
          },
        ]
  return (
    <div className='flex mx-auto space-x-3 justify-center'>
        {stories.map((story) => (
            <StoryCard name={story.name} src={story.src} proile={story.profile}  />
        ) )}

    </div>
  )
}

export default Stories