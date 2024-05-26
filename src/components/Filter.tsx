const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200 outline-none"
        >
          <option value="">Type</option>
          <option value="Baya">Baya</option>
          <option value="Chaîne de Pied">Chaîne de Pied</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="Prix min"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-200 outline-none"
        />
        <input
          type="text"
          name="max"
          placeholder="Prix max"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-200 outline-none"
        />
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200 outline-none"
        >
          <option value="">Taille</option>
          <option value="Baya">Baya</option>
          <option value="Chaîne de Pied">Chaîne de Pied</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200 outline-none"
        >
          <option value="">Couleur</option>
          <option value="Baya">Baya</option>
          <option value="Chaîne de Pied">Chaîne de Pied</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200 outline-none"
        >
          <option value="">Tous les filtres</option>
          <option value="Baya">Baya</option>
          <option value="Chaîne de Pied">Chaîne de Pied</option>
        </select>
      </div>
      <div className="flex gap-6 h-fit">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200 outline-none"
        >
          <option value="">Trier par</option>
          <option value="Prix croissant">Prix croissant</option>
          <option value="Prix décroissant">Prix décroissant</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
