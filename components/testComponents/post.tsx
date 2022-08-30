import { FC } from 'react'
import { PostType } from '../../app/types/types'
import { DeleteSVG } from '../svgIcons/delete'
import { PencilSVG } from '../svgIcons/pencil'

type PostPropsType = { 
  content: PostType
  deleteHandler: (postId: string) => void
  openUpdateModal: (postData: PostType) => void
}
export const Post: FC<PostPropsType> = ({ content, deleteHandler, openUpdateModal }) => {

  const UpdateButtonHandler = () => {
    openUpdateModal(content)
  }

  return <section className='relative bg-sky-100 container border-2 border-sky-400 rounded m-5 p-5'>
    <h3 className='text-3xl mb-3'>{content.title}</h3>
    <p className='text-lg'>{content.description}</p>
    <button 
      className='absolute top-5 right-5 border-2 border-rose-400 rounded p-1 hover:bg-rose-200 duration-300'
      onClick={() => deleteHandler(content.id)}
    ><DeleteSVG className='fill-rose-400 w-5 h-5' /></button>
    <button 
      className='absolute top-5 right-16 border-2 border-blue-400 rounded p-1 hover:bg-blue-200 duration-300'
      onClick={UpdateButtonHandler}
    ><PencilSVG className='fill-blue-400 w-5 h-5' /></button>
  </section>
}