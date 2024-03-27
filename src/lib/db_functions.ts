import {db} from ./db.ts

export  async function addWord({sessionName,word,desc}:{sessionName:string,word:string, desc:string}){
  const uploaded = await prisma.user.update({
    where: { name: sessionName },
    data: {
      word: {
        create: { word:word, description:desc },
      },
     posts:{increment:1} 
    },
    include: { posts: true },
  });

  return !!uploaded
}

export async function downVoteWord({sessionName,id,}:{sessionName:string,id:string,}){
  data = {
    word:{
      update:{
        where:{id:id},
        data:{downvote:{increment:1}}
      }
    }
  }
  const voted = await db.user.update({
    where:{name:sessionName}, 
    data:data 
  })

  return !!voted
}

export async function upVoteWord({sessionName,id,}:{sessionName:string,id:string,}){
  data = {
    upvotes:{increment:1},
    word:{
      update:{
        where:{id:id},
        data:{upvote:{increment:1}}
      }
    }
  }
  const voted = await db.user.update({
    where:{name:sessionName}, 
    data:data 
  })

  return !!voted
}

//VOTE COMMENT
export async function voteComment({id,voteType}:{id:string,voteType:string}){
  const voted = await db.comment.update({
    where:{id:id},
    data:{voteType:{increment:1}}
  })

  return !!commented
}

export async function addComment({id,comment}:{id:string,comment:string}){
  const commented = await db.word.update({
    where:{id:id},
    data:{comment:{create:{comment:comment}}}
  })

  return !!commented
}

export async function findUser(sessionName:string){
  const User = await db.user.findUnique({
    where:{name:sessionName},
    include:{words:true,comment:true,}  
  })

  return User
}

export async function showcasePosts(){
  const Posts = await db.word.findMany()
  return Posts
}
