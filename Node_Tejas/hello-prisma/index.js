import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
    //?Create (Insert Data)
    //!Single User
    // const user=await prisma.user.create({
    //     data:{
    //         name:"alice3",
    //         email:"alice23@gmail.com"
    //     }
    // });
    // console.log(user);

    //!multiple user
    // const newusers = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "yash",
    //             email: "yash@gmail.com"
    //         },
    //         {
    //             name: "om",
    //             email: "om@gmail.com"
    //         },
    //     ]
    // });
    // console.log(newusers);

    //!Read (Fetch data)
    //!Get all user
    // const users2=await prisma.user.findMany();
    // console.log(users2);

    //!Get sinngle user
    // const users1=await prisma.user.findUnique({
    //     where:{id:2},
    // });
    // console.log(users1);

    //!Get user with filtering
    // const user=await prisma.user.findMany({
    //     where:{name:"yash"},
    // });
    // console.log(user);

    //!Update (Modify Data)
    // const updateuser=await prisma.user.update({
    //     where:{id:3},
    //     data:{name:"BobTheBuilder"},
    // })
    // console.log(updateuser);
    
    //!Delete data
    const deleteuser=await prisma.user.delete({
        where:{id:3},
    });
    console.log(deleteuser);
    


}

main().catch((e) => console.log(e))
    .finally(async () => {
        await prisma.$disconnect();
    })