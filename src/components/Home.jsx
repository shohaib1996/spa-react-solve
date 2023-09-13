import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Cart from "./Cart";
import alert from 'sweetalert';


const Home = () => {
    const [actors, setActors] = useState([]);
    const [selectedMembers, setSelectedMembers] = useState([])
    const [sum, setSum] = useState(0)



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActors(data))
    }, [])

    const handleSelect = (actor) => {
        // console.log(actor)

        const existActor = selectedMembers.find(selectedActor => selectedActor.id === actor.id);
        
        if (!existActor) {
            const newSum = sum + actor.salary;
            if (newSum <= 20000){
                setSelectedMembers([...selectedMembers, actor]);
                setSum(newSum);   
            }else {
                return alert(`You have only ${20000 - sum}`)
            }   
        } else {
            return alert('You Can not add same item again!!')
        }
        // let cost = actor.salary;

        // if (isExist) {
        //     return alert("already booked");
        // } else {
        //     selectedMembers.forEach((item) => {
        //         cost = cost + item.salary;
        //     });
        //     const remaining = 20000 - cost;
        //     if (cost > 20000) {
        //         return alert('You have to build under 20k');
        //     } else {
        //         setRemaining(remaining);

        //         setTotalCost(cost);

        //         setSelectedMembers([...selectedMembers, actor]);
        //     }
        // }


    }


    return (
        <div style={{ backgroundImage: `url('https://i.ibb.co/JB1y0X5/4690.jpg')`, backgroundColor: 'rgba(0, 0, 0, 0.6)' }} className="bg-no-repeat bg-cover bg-fixed bg-blend-overlay ">
            <h1 className="text-4xl text-white font-bold text-center max-w-5xl mx-auto p-5 border-b-2">Build An Avengers Movie Select Your Team Member Within <span className="text-green-500 font-extrabold">$20,000</span>And make your Dream true !!!</h1>
            <p className="text-4xl font-bold text-white text-center mt-5 mb-5">Team Member: {actors.length}</p>
            <div className="flex gap-5 max-w-5xl mx-auto">
                <div className="w-2/3">
                    <div className=" flex flex-wrap gap-3 justify-center items-center mb-12">
                        {
                            actors.map(actor => <Card handleSelect={handleSelect} key={actor.id} actor={actor}></Card>)
                        }
                    </div>
                </div>
                <div className="w-1/3 text-center">
                    <h1 className="text-white text-2xl font-bold">Make Your Team</h1>
                    <h2 className="text-white font-bold text-xl mt-2">Selected Members: <span className="text-3xl bg-green-600 rounded-xl px-2 ">{selectedMembers.length}</span> </h2>
                    <div>
                        <p className="text-white font-bold text-xl mt-3">Budget: $20,000</p>
                        <p className="text-white font-bold text-xl mt-3">Remaining: <span className="bg-red-600 rounded-xl px-2 ">${20000 - sum}</span></p>
                        <p className="text-white font-bold text-xl mt-3 ">Total Cost: <span className="bg-green-600 rounded-xl px-2 ">${sum}</span></p>
                    </div>
                    <div>
                        {
                            selectedMembers.map(actor => <Cart key={actor.id} actor={actor}></Cart>)
                        }
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Home;