"use server"

import { auth } from "../../auth";
import { db } from "./db";


export  async function addWord(word:string, desc:string){
  const session = await auth()
  const sessionMail = session?.user?.email?.toString()
  const uploaded = await db.user.update({
    where: { email: sessionMail },
    data:{
      posts:{increment:1},
      words:{       
        create:{
          word:word,
          description:desc
        },
      },
    },
    include:{words:true} 
  });
  return !!uploaded
}

export async function downVoteWord(id:string){

  const voted = await db.word.update({
    where:{id:id}, 
    data:{ 
      downvotes:{increment:1}
    } 
  })

  const session = await auth()

  const userVoted = await db.user.update({
    where:{id:session?.user?.id},
    data:{
      downvoted:{
        create:{
          wordId:voted.id
        }
      }
    }
  })

  return !!voted
}

export async function decreUpVotedWord(id:string){
  const dVoted = await db.word.update({
    where:{id:id}, 
    data:{
      upvotes:{decrement:1},
      User:{update:{upvotes:{decrement:1}}}
    } 
  })
  
  const session = await auth()
  const dUpVoted = await db.upVoted.deleteMany({
    where:{userId:session?.user?.id,wordId:id}
  })

  console.log('dVoted')
}
export async function decreDownVotedWord(id:string){
  const dVoted = await db.word.update({
    where:{id:id}, 
    data:{
      downvotes:{decrement:1},
    } 
  })
  
  const session = await auth()
  const dDownVoted = await db.downVoted.deleteMany({
    where:{userId:session?.user?.id,wordId:id}
  })

  console.log(dVoted)
  return !!dVoted
}

export async function upVoteWord(id:string){
  
  const voted = await db.word.update({
    where:{id:id}, 
    data:{
      upvotes:{increment:1},
      User:{update:{upvotes:{increment:1}}}
    } 
  })
  
  const session = await auth()

  const userVoted = await db.user.update({
    where:{id:session?.user?.id},
    data:{
      upvoted:{
        create:{
          wordId:voted.id
        }
      }
    }
  })

  console.log(voted)
  return !!voted
}

export async function downVoteComment(id:string){
  const voted = await db.comment.update({
    where:{id:id},
    data:{downvotes:{increment:1}}
  })

  return !!voted
}

export async function upVoteComment(id:string){
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

export async function findUser(userName:string){
  let user = await db.user.findFirst({
    where:{name:userName},
    include:{words:true, Comment:true}  
  })
  // console.log(user)
  return {user}
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

export async function deleteWord(wordId:string){
  const deleted = await db.word.delete({
    where:{id:wordId},
  })
  let upVotesToRemove:any = deleted.upvotes
  const userUpdate = await db.user.update({
    where:{id:deleted.userId},
    data:{
      posts:{decrement:1},
      upvotes:{decrement:upVotesToRemove}
    }
  })
  console.log(deleted)
  return !!deleted
}

export async function wordVoted(id:string,sessionId:string|undefined){
  if (sessionId){
    

    let upvoted = await db.upVoted.findMany({
      where:{wordId:id, userId:sessionId},
    })
    console.log(upvoted)
    if (upvoted.length > 0) return 'upvoted'

    let downvoted = await db.downVoted.findMany({
      where:{wordId:id,userId:sessionId}
    })
    console.log(downvoted)
    if (downvoted.length > 0) return 'downvoted'
    
    return 'notvoted'
    
  }
}
