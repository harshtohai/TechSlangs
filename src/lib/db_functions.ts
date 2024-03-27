import { auth } from "../../auth";
import { db } from "./db";

// const session = async ()=>{ return await auth()}
export  async function addWord(sessionMail:any,word:string, desc:string){
  // const uploaded = await db.user.update({
  //   where: { email: sessionMail },
  //   data: {
  //     words: {
  //       create: { word:word, description:desc },
  //     },
  //    posts:{increment:1} 
  //   },
  //   include:{words:true}
  // });

  // return !!uploaded
  'use server'


  const session = await auth()
  console.log(session)
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

export async function findUser(sessionMail:string){
  const User = await db.user.findUnique({
    where:{email:sessionMail},
    include:{words:true,Comment:true,}  
  })

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
