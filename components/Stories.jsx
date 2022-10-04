import React from 'react'
import StoryCard from './StoryCard'

function Stories() {
        const stories = [
          {
            id: 1,
            name: 'Tooni Olaniyan',
            src: 'https://links.papareact.com/zof',
            profile: 'https://links.papareact.com/l4v',
          },
          {
            id: 2,
            name: 'Elon Musk',
            src: 'https://links.papareact.com/k2j',
            profile: 'https://links.papareact.com/f0p',
          },
          {
            id: 3,
            name: 'Doja Cat',
            src: 'https://links.papareact.com/xql',
            profile: 'https://links.papareact.com/snf',
          },
          {
            id: 4,
            name: 'Tywin Lanister',
            src: 'https://links.papareact.com/zof',
            profile: 'https://links.papareact.com/l4v',
          },
          {
            id: 5,
            name: 'Amond Targaryn',
            src: 'https://links.papareact.com/4u4',
            profile: 'https://links.papareact.com/zvy',
          },
        ]
  return (
    <div className='flex mx-auto space-x-3 justify-center'>
        {stories.map((story) => (
            <StoryCard key={story.id} name={story.name} src={story.src} proile={story.profile}  />
        ) )}

    </div>
  )
}

export default Stories