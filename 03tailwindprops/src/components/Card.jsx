import React from 'react'

const Card = ({username}) => {
  return (
    <div>
        <figure className="p-8 bg-slate-100 rounded-xl dark:bg-slate-800">
  <img className="w-24 h-24 mx-auto rounded-full" src="https://www.pexels.com/photo/two-deer-eating-in-the-woods-near-a-tree-19859154/" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-50">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card