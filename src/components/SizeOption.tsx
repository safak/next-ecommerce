const SizeOption = () => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-xs uppercase font-bold">Taille</h4>
      <select
        name="type"
        className="py-3 px-4 rounded-lg text-sm font-light bg-gray-100 outline-none"
      >
        <option value="">Sélectionner</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </div>
  );
};

export default SizeOption;
