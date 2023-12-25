
const Users = () => {
    return (
        <div className="">
            <h1 className="text-2xl font-bold text-center my-10">Who are our users?</h1>
            <div className="flex justify-around gap-5 w-[80%] mx-auto">
               <div className="space-y-5">
               <div className=" border-2 w-72 text-center text-xl font-bold h-56 bg-[url('https://i.ibb.co/wM695Yz/developer.jpg')]">
                    <h1 > Web developers</h1>
                </div>
                <div className="border-2 w-72 text-center text-xl font-bold h-56 bg-[url('https://i.ibb.co/D5Jx4vZ/Software-Engineers.jpg')]">
                    <h1> Software Engineers</h1>
                </div>
               </div>
               <div className="space-y-5">
               <div className=" border-2 w-72 text-center text-xl font-bold h-56 bg-[url('https://i.ibb.co/G5ZbVKB/corporate.webp')]">
                    <h1 >  Corporate professionals</h1>
                </div>
                <div className=" border-2 w-72 text-center text-xl font-bold h-56 bg-[url('https://i.ibb.co/ph2rb9y/learning-and-education-banner-free-vector.jpg')]">
                    <h1>Students</h1>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Users;