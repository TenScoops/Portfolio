import dwarf from "../assets/HappyDwarf.jpg"
const Projects = ()=> {
    return (
    <div className="h-screen flex flex-col items-center">
        <h1 className="text-xl">Projects</h1>
        <div className="flex flex-row items-center justify-center space-x-3 mt-8">
            <img className="rounded-lg border-2 border-black" src={dwarf} height={400} width={400}/>
            <div className="w-1/3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eligendi quos! Cum odit porro laborum quam quia totam accusantium cupiditate suscipit eaque obcaecati quaerat repudiandae, dicta ullam ad iste officia.
            Quo blanditiis distinctio itaque quod repellendus officiis sint sunt iusto possimus minima non, sit, corrupti maxime expedita. Incidunt cum debitis dignissimos delectus dolorum dolore dolores quae velit itaque, cumque esse.
            Maiores deserunt cupiditate voluptatum eaque dicta perferendis ratione? Qui sapiente expedita repellat voluptatibus nobis quam saepe. Amet, quae non facere, ipsum repudiandae minus, vel repellat corporis minima consectetur iste deserunt.</div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3 mt-10">
            <div className="w-1/3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eligendi quos! Cum odit porro laborum quam quia totam accusantium cupiditate suscipit eaque obcaecati quaerat repudiandae, dicta ullam ad iste officia.
                Quo blanditiis distinctio itaque quod repellendus officiis sint sunt iusto possimus minima non, sit, corrupti maxime expedita. Incidunt cum debitis dignissimos delectus dolorum dolore dolores quae velit itaque, cumque esse.
                Maiores deserunt cupiditate voluptatum eaque dicta perferendis ratione? Qui sapiente expedita repellat voluptatibus nobis quam saepe. Amet, quae non facere, ipsum repudiandae minus, vel repellat corporis minima consectetur iste deserunt.
            </div>
            <img className="rounded-lg border-2 border-black" src={dwarf} height={400} width={400}/>
            
        </div>
     
    </div>
    )
}
export default Projects