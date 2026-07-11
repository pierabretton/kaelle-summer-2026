import React from "react";

export default function ToddlerCampLunchMenu() {
  return (
    <div className="prose prose-pink max-w-none">
      <p className="text-lg leading-relaxed text-gray-700">
        Sending a three-year-old off to a full day of summer camp is stressful enough without worrying about whether they are actually going to eat their lunch. Kaelle is currently in a phase where visible vegetables are viewed with deep suspicion. If it's green and on a plate, it's a negotiation.
      </p>

      <p className="text-lg leading-relaxed text-gray-700 mt-4">
        But camps are exhausting, and they need proper fuel. Over the last few weeks, we've developed a reliable, five-day rotation of lunches and snacks that actually come home empty. The secret weapon? A "green pasta" sauce that hides an entire head of broccoli.
      </p>

      <p className="text-lg leading-relaxed text-gray-700 mt-4">
        Here is exactly what we pack for a week of summer camp.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>
        The 5-Day Camp Lunch Menu
      </h2>

      <div className="space-y-6">
        {/* Monday */}
        <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
          <h3 className="text-xl font-bold text-pink-600 mb-3 flex items-center gap-2">
            <span>🗓️</span> Monday
          </h3>
          <div className="space-y-2">
            <p><strong>Snack:</strong> 2 Babybel cheese + fresh blueberries</p>
            <p><strong>Lunch:</strong> Green Pasta (penne with the hidden broccoli &amp; spinach sauce)</p>
            <p className="text-sm text-gray-600 italic mt-2">The ultimate Monday win. She eats a full portion of broccoli without knowing.</p>
          </div>
        </div>

        {/* Tuesday */}
        <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
          <h3 className="text-xl font-bold text-orange-600 mb-3 flex items-center gap-2">
            <span>🗓️</span> Tuesday
          </h3>
          <div className="space-y-2">
            <p><strong>Snack:</strong> 2 Babybel cheese + mandarins</p>
            <p><strong>Lunch:</strong> Chicken or pork with rice, carrots, and asparagus</p>
            <p className="text-sm text-gray-600 italic mt-2">Familiar proteins and simple carbs for a heavy physical activity day.</p>
          </div>
        </div>

        {/* Wednesday */}
        <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
          <h3 className="text-xl font-bold text-teal-600 mb-3 flex items-center gap-2">
            <span>🗓️</span> Wednesday
          </h3>
          <div className="space-y-2">
            <p><strong>Snack:</strong> 2 Babybel cheese + green grapes (halved lengthways)</p>
            <p><strong>Lunch:</strong> Pasta with pork or cheese (whichever protein she didn't have on Tuesday)</p>
          </div>
        </div>

        {/* Thursday */}
        <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
          <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center gap-2">
            <span>🗓️</span> Thursday
          </h3>
          <div className="space-y-2">
            <p><strong>Snack:</strong> 2 Babybel cheese + strawberries</p>
            <p><strong>Lunch:</strong> Green Pasta (Round 2)</p>
            <p className="text-sm text-gray-600 italic mt-2">She genuinely loves this pasta, so repeating it on Thursday guarantees a good lunch.</p>
          </div>
        </div>

        {/* Friday */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
            <span>🗓️</span> Friday
          </h3>
          <div className="space-y-2">
            <p><strong>Snack:</strong> 2 Babybel cheese + a mix of leftover fruit from the week</p>
            <p><strong>Lunch:</strong> Pitta bread with guacamole</p>
            <p className="text-sm text-gray-600 italic mt-2">A fun, easy-to-eat Friday lunch that feels a bit like a treat.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>
        The "Hidden Veg" Green Pasta Recipe
      </h2>

      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        This is the holy grail of our lunchbox rotation. It looks like pesto, tastes creamy and cheesy, and hides an astonishing amount of vegetables. The halloumi provides the salty kick that toddlers love, masking any bitterness from the greens.
      </p>

      <div className="bg-white rounded-2xl p-8 border-2 border-green-100 shadow-sm">
        <h3 className="text-xl font-bold text-green-700 mb-4">Ingredients</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
          <li>1 whole head of broccoli (florets and tender parts of the stem)</li>
          <li>A large handful of fresh spinach</li>
          <li>Half a block of halloumi cheese, grated or cubed</li>
          <li>A splash of whole milk (just enough to blend)</li>
          <li>Pasta of choice (we use penne or fusilli as it holds the sauce well)</li>
        </ul>

        <h3 className="text-xl font-bold text-green-700 mb-4">Method</h3>
        <ol className="list-decimal pl-5 space-y-3 text-gray-700">
          <li><strong>Steam the veg:</strong> Steam the broccoli florets until very soft. Throw the spinach in for the last 60 seconds just to wilt it.</li>
          <li><strong>Blend:</strong> Transfer the warm broccoli and spinach to a blender. Add the halloumi and a splash of milk.</li>
          <li><strong>Blitz to a sauce:</strong> Blend on high until completely smooth and creamy. The heat from the vegetables will start to melt the halloumi. If it's too thick, add a tiny bit more milk or pasta water.</li>
          <li><strong>Mix:</strong> Stir the warm green sauce through freshly cooked pasta.</li>
        </ol>
        
        <div className="mt-6 bg-green-50 p-4 rounded-xl border border-green-200">
          <p className="text-sm text-green-800 font-medium m-0">
            <strong>Pro tip:</strong> Make a double batch of the sauce and freeze it in silicone ice cube trays. On busy camp mornings, you just boil the pasta and stir in a few frozen sauce cubes.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>
        A Note on the Babybel Obsession
      </h2>

      <p className="text-lg leading-relaxed text-gray-700">
        You probably noticed the two Babybel cheeses every single day. When you find a healthy, protein-rich snack that your toddler will reliably eat without a fight, you lean into it. They survive perfectly well in a lunchbox, and unwrapping the wax is half the fun for a three-year-old.
      </p>
    </div>
  );
}
