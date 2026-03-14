function Contact() {
  return (
    <main className="w-full min-h-screen bg-gray-100 flex flex-col items-center pb-20 gap-8">
      {/* Banner */}
      <div className="w-full flex justify-center mt-12">
        <div className="bg-red-500 px-12 py-6 rounded-xl shadow-2xl animate-float">
          <h2 className="text-white text-2xl md:text-5xl  font-bold text-center tracking-wide drop-shadow-lg">
            Nike Accessories
          </h2>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 mt-5 w-full max-w-7xl">
        {/* Card Template */}
        {[
          { img: "product9", name: "Nike bag", price: 199 },
          { img: "product1", name: "Nike shoes", price: 399 },
          { img: "product8", name: "Nike shoes", price: 499 },
          { img: "product2", name: "Nike shoes", price: 599 },
          { img: "product14", name: "Nike bottle", price: 120 },
          { img: "product13", name: "Nike bottle", price: 150 },
          { img: "product12", name: "Nike cap", price: 69 },
          { img: "product11", name: "Nike bag", price: 120 },
          { img: "product10", name: "Nike mask", price: 25 },
          { img: "product19", name: "Nike shoes", price: 125 },
          { img: "product20", name: "Nike gloves", price: 65 },
          { img: "product21", name: "AIR Jordan", price: 345 },
          { img: "product22", name: "Nike glasses", price: 110 },
          { img: "product23", name: "Air Jordan", price: 425 },
          { img: "product24", name: "Nike slippers", price: 69 },
          { img: "product25", name: "Nike bands", price: 23 },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-linear-to-b from-red-600 to-white flex flex-col items-center gap-3 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 p-3"
          >
          
<img
              src={`/images/${item.img}.png`}
              alt={item.name}
              className="w-full h-40 object-contain border-2 bg-gray-100 rounded-lg"
            />

            <h1 className="font-bold text-lg text-gray-800">{item.name}</h1>
            <h3 className="px-4 py-1 text-xl rounded-lg bg-red-600 text-white font-semibold">
              ${item.price}
            </h3>
            <button className="mt-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Contact;