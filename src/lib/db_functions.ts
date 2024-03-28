"use server"

import { auth } from "../../auth";
import { db } from "./db";


// async ()=>{const session = await auth()}  
// export const checker = async ()=>{
//   console.log(session)
// }
export  async function addWord(word:string, desc:string){
  const session = await auth()
  const sessionMail = session?.user?.email?.toString()
  console.log(sessionMail)
  console.log(word)
  console.log(desc)
  const uploaded = await db.user.update({
    where: { email: sessionMail },
    data:{
      upvotes:{increment:1},      
      words:{       
        create:{
          word:word,
          description:desc
        },
      },
    },
    include:{words:true} 
  });
  console.log(!!uploaded)
  console.log(uploaded)
  return !!uploaded
}

export async function downVoteWord({id}:{id:string}){
  const voted = await db.word.update({
    where:{id:id}, 
    data:{ 
      downvotes:{increment:1}
    } 
  })

  return !!voted
}

export async function upVoteWord({id,}:{id:string,}){
  
  const voted = await db.word.update({
    where:{id:id}, 
    data:{
      upvotes:{increment:1},
      User:{update:{upvotes:{increment:1}}}
    } 
  })

  return !!voted
}

//VOTE COMMENT
export async function downVoteComment({id}:{id:string}){
  const voted = await db.comment.update({
    where:{id:id},
    data:{downvotes:{increment:1}}
  })

  return !!voted
}

export async function upVoteComment({id}:{id:string}){
  const voted = await db.comment.update({
    where:{id:id},
    data:{
      upvotes:{increment:1},
      User:{update:{upvotes:{increment:1}}}
  }
  })

  return !!voted
}

export async function addComment({id,commnt}:{id:string,commnt:string}){
  const commented = await db.word.update({
    where:{id:id},
    data:{comments:{create:{comment:commnt}}}
  })

  return !!commented
}

export async function findUser(){
  const session = await auth()
  const sessionMail = session?.user?.email?.toString()
  const User = await db.user.findUnique({
    where:{email:sessionMail},
    include:{words:true,Comment:true,}  
  })
  console.log(User)
  return User
}

export async function showcasePosts(){
  const Posts = await db.word.findMany()
  return Posts
}

export async function findWord(wordId:string){
  const post = db.word.findUnique({
    where:{id:wordId},
    include:{comments:true}
  })

  return post
}
