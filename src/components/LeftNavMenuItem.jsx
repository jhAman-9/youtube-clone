import React from 'react'

function LeftNavMenuItem({className, icon, action, text}) {
  return (
    <div
      className={'text-white text-sm cursor-pointer h-10 flex items-center px-3 md-[1px] rounded-lg hover:bg-white/[0.15] ' + className}
    onClick={action}>
      <span className='text-xl mr-5'>{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuItem


