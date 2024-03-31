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

  const userVoted = await db.voted.upsert({
    where:{wordId:id},
    create:{
      wordId:id,
      userId:session?.user?.id,
      vote:false
    },
    update:{
      vote:false
    }
  })
  console.log('word Down voted')
  return !!voted
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

  const userVoted = await db.voted.upsert({
    where:{wordId:id},
    create:{
      wordId:id,
      userId:session?.user?.id,
      vote:true
    },
    update:{
      vote:true
    }
  })

  console.log('word UP voted')
  return !!voted
}

export async function deUpVoteWord(id:string){
  const dVoted = await db.word.update({
    where:{id:id}, 
    data:{
      upvotes:{decrement:1},
      User:{update:{upvotes:{decrement:1}}}
    } 
  })
  
  const dUpVoted = await db.voted.update({
    where:{wordId:id},
    data:{
      vote:null
    }
  })

  console.log('Word DeVoted From UP')
}

export async function deDownVoteWord(id:string){
  const dVoted = await db.word.update({
    where:{id:id}, 
    data:{
      downvotes:{decrement:1},
    } 
  })
  
  const dUpVoted = await db.voted.update({
    where:{wordId:id},
    data:{
      vote:null
    }
  })

  console.log('Word DeVoted from Down')
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

    let upvoted = await db.voted.findUnique({
      where:{wordId:id, userId:sessionId},
    })
    
    console.log(wordVoted)
    return upvoted?.vote


  }
}

export async function fromDownToUp(id:string){
  deDownVoteWord(id)
  upVoteWord(id)
}

export async function fromUpToDown(id:string){
  deUpVoteWord(id)
  downVoteWord(id)
}