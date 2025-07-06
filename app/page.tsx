import { trending_data } from "@/data/trending";
export default function Home() {
  return (
   <main className=" bg-[#84a98c]">
    <section className="max-w-7xl mx-auto flex flex-col justify-center items-center p-6">
      <h2 className="font-bold text-5xl text-[#2f3e46] ">Unlock Your Next Adventure </h2>
      <h3 className="text-[#2f3e46] font-light py-5 text-xl ">Seamless Stays, Unforgettable Journeys – All in One Click.</h3>
    </section>

    <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
      {/* searchform */}
    </section>
    <section className="max-w-7xl mx-auto mt-10 p-6 rounded-t-xl bg-[#cad2c5]">
      <div className="pt-5 flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold text-[#2f3e46]">Destinations You will Love</h3>
        <p className="text-sm font-light font-bold text-[#2f3e46]">Most popular choices for travelling from around the world</p>
      </div>
      <div className="flex space-x-4 py-5 overflow-x-scroll">
        {trending_data.map((item) => (
          <div key={item.id} className="space-y-1 shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.02]">

           <div className="relative overflow-hidden rounded-xl group">
        <img 
          className="w-80 h-72 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" 
          src={item.src} 
          alt={item.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
            <p className="font-bold text-[#2f3e46]">{item.title}</p>
            <p className="text-[#2f3e46]">{item.location}</p>
            <p className="font-light text-sm text-[#2f3e46]">{item.description}</p>

          </div>
        ))}
      </div>
    </section>

   </main>
  );
}
